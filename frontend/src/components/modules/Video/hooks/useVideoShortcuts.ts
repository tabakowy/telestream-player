import { MutableRefObject, useEffect } from "react"

export const VIDEO_SKIP_BY_VALUE = 10

export const VIDEO_SHORTCUTS = {
  togglePlay: {
    label: "Space",
    keyCode: "Space",
  },
  toggleMute: {
    label: "M",
    keyCode: "KeyM",
  },
  enterFullscreen: {
    label: "F",
    keyCode: "KeyF",
  },
  skipBack: {
    label: "Arrow left",
    keyCode: "ArrowLeft",
  },
  skipForward: {
    label: "Arrow right",
    keyCode: "ArrowRight",
  },
}

export function useVideoShortcuts(videoRef: MutableRefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    function handleKeyboardEvent(e: KeyboardEvent) {
      const video = videoRef.current
      const code = e.code

      if (!video) return

      if (code === VIDEO_SHORTCUTS.togglePlay.keyCode) {
        if (video.paused) {
          video.play()
        } else {
          video.pause()
        }
      }

      if (code === VIDEO_SHORTCUTS.skipForward.keyCode) {
        video.currentTime = video.currentTime + VIDEO_SKIP_BY_VALUE
      }

      if (code === VIDEO_SHORTCUTS.skipBack.keyCode) {
        video.currentTime = video.currentTime - VIDEO_SKIP_BY_VALUE
      }

      if (code === VIDEO_SHORTCUTS.toggleMute.keyCode) {
        video.muted = !video.muted
      }

      if (code === VIDEO_SHORTCUTS.enterFullscreen.keyCode) {
        video.requestFullscreen()
      }
    }

    document.addEventListener("keydown", handleKeyboardEvent)

    return () => {
      document.removeEventListener("keydown", handleKeyboardEvent)
    }
  })
}
