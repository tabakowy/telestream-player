import { DetailedHTMLProps, useReducer, useRef, VideoHTMLAttributes } from "react"

import { cn } from "@/ts/utils/cn"

import { useVideo } from "./hooks/useVideo"
import { useVideoShortcuts } from "./hooks/useVideoShortcuts"
import { VideoControls } from "./partials/VideoControls"
import { videoReducer } from "./state/videoReducer"
import { togglePlay } from "./utils/togglePlay"

type VideoProps = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
  sources?: Array<{
    url: string
    type: string
  }>
}

export function Video({ sources, children, className, ...props }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const video = videoRef.current

  const [videoState, dispatch] = useReducer(videoReducer, {
    duration: 0,
    currentTime: 0,
    bufferedTime: 0,
    isPlaying: false,
    isMuted: false,
  })

  useVideo(videoRef, dispatch)
  useVideoShortcuts(videoRef)

  return (
    <section className="relative overflow-hidden rounded-lg shadow-2xl" data-testid="video-player">
      <video
        ref={videoRef}
        onClick={() => togglePlay(video)}
        className={cn("w-full object-cover", className)}
        {...props}>
        {sources?.map((src) => (
          <source src={src.url} type={src.type} key={src.url} />
        ))}
        {children}
        Your browser does not support the video tag.
      </video>

      {video && <VideoControls video={video} videoState={videoState} dispatch={dispatch} />}
    </section>
  )
}
