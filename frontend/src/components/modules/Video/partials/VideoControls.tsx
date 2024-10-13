import {
  IconMaximize,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconRewindBackward10,
  IconRewindForward10,
  IconVolume,
  IconVolumeOff,
} from "@tabler/icons-react"
import { ButtonHTMLAttributes, Dispatch } from "react"

import { cn } from "@/ts/utils/cn"
import { formatVideoTime } from "@/ts/utils/format"

import { VIDEO_SKIP_BY_VALUE } from "../hooks/useVideoShortcuts"
import { VideoReducerActionsType, VideoReducerStateType } from "../state/videoReducer"
import { togglePlay } from "../utils/togglePlay"

type VideoControlsProps = {
  video: HTMLVideoElement
  videoState: VideoReducerStateType
  dispatch: Dispatch<VideoReducerActionsType>
}

export function VideoControls({ videoState, video }: VideoControlsProps) {
  function handleSkipBy(seconds: number) {
    video.currentTime = video.currentTime + seconds
  }

  function muteVideo() {
    video.muted = !video.muted
  }

  function requestFullscreen() {
    video.requestFullscreen()
  }

  return (
    <section className="absolute inset-x-0 bottom-0 text-white bg-gradient-to-b from-transparent to-black">
      <div
        className="absolute bottom-0 h-1 bg-white"
        style={{
          width: `${(videoState.bufferedTime / videoState.duration) * 100}%`,
        }}
      />

      <div className="px-3">
        <input
          type="range"
          max={videoState.duration}
          value={Math.round(videoState.currentTime)}
          className="relative z-10 w-full h-1.5  border-none rounded-full appearance-none cursor-pointer bg-slate-50"
          onChange={(e) => {
            video.currentTime = Number(e.currentTarget.value)
          }}
        />
      </div>

      <div className="flex items-center gap-3 p-3 pt-0">
        <ControlsButton title={videoState.isPlaying ? "Pause video" : "Play video"} onClick={() => togglePlay(video)}>
          {videoState.isPlaying ? <IconPlayerPauseFilled /> : <IconPlayerPlayFilled />}
        </ControlsButton>

        <div className="mr-auto text-sm">
          {formatVideoTime(videoState.currentTime)} / {formatVideoTime(videoState.duration)}
        </div>

        <ControlsButton title="Skip back 10 seconed" onClick={() => handleSkipBy(-VIDEO_SKIP_BY_VALUE)}>
          <IconRewindBackward10 />
        </ControlsButton>

        <ControlsButton title="Skip forward 10 seconds" onClick={() => handleSkipBy(VIDEO_SKIP_BY_VALUE)}>
          <IconRewindForward10 />
        </ControlsButton>

        <ControlsButton title={videoState.isMuted ? "Unmute video" : "Mute video"} onClick={muteVideo}>
          {videoState.isMuted ? <IconVolumeOff /> : <IconVolume />}
        </ControlsButton>

        <ControlsButton title="Enter fullscreen" onClick={requestFullscreen}>
          <IconMaximize />
        </ControlsButton>
      </div>
    </section>
  )
}

function ControlsButton({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "w-10 grid place-items-center transition-colors hover:bg-slate-900/50 rounded-full aspect-square",
        className
      )}
      type="button"
      {...props}>
      {children}
    </button>
  )
}
