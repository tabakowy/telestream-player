export function togglePlay(video: HTMLVideoElement | null) {
  if (!video) return

  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
