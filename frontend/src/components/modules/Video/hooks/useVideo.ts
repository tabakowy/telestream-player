import { Dispatch, MutableRefObject, useEffect } from "react"

import { VideoReducerActionsType } from "../state/videoReducer"

export function useVideo(
  videoRef: MutableRefObject<HTMLVideoElement | null>,
  dispatch: Dispatch<VideoReducerActionsType>
) {
  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    function initPlayer() {
      if (!video) return

      dispatch({ type: "setDuration", payload: video.duration })
    }

    function updateProgress() {
      if (!video) return

      dispatch({ type: "setCurrentTime", payload: video.currentTime })
      dispatch({ type: "setBufferedTime", payload: video.buffered.end(video.buffered.length - 1) })
    }

    function handlePlay() {
      dispatch({ type: "play" })
    }

    function handlePause() {
      dispatch({ type: "pause" })
    }

    function updateVolume() {
      if (!video) return

      if (video.muted) {
        dispatch({ type: "mute" })
      } else {
        dispatch({ type: "unmute" })
      }
    }

    video.addEventListener("loadeddata", initPlayer)
    video.addEventListener("timeupdate", updateProgress)
    video.addEventListener("volumechange", updateVolume)
    video.addEventListener("pause", handlePause)
    video.addEventListener("play", handlePlay)

    return () => {
      video.removeEventListener("loadeddata", initPlayer)
      video.removeEventListener("timeupdate", updateProgress)
      video.removeEventListener("volumechange", updateVolume)
      video.removeEventListener("pause", handlePause)
      video.addEventListener("play", handlePlay)
    }
  }, [dispatch, videoRef])
}
