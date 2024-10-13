export type VideoReducerStateType = {
  isMuted: boolean
  isPlaying: boolean
  bufferedTime: number
  currentTime: number
  duration: number
}

export type VideoReducerActionsType =
  | {
      type: "play" | "pause" | "mute" | "unmute"
    }
  | {
      type: "setDuration" | "setCurrentTime" | "setBufferedTime"
      payload: number
    }

export function videoReducer(state: VideoReducerStateType, action: VideoReducerActionsType) {
  const updatedState = { ...state }

  switch (action.type) {
    case "play": {
      updatedState.isPlaying = true
      break
    }

    case "pause": {
      updatedState.isPlaying = false
      break
    }

    case "mute": {
      updatedState.isMuted = true
      break
    }

    case "unmute": {
      updatedState.isMuted = false
      break
    }

    case "setDuration": {
      updatedState.duration = action.payload
      break
    }

    case "setCurrentTime": {
      updatedState.currentTime = action.payload
      break
    }

    case "setBufferedTime": {
      updatedState.bufferedTime = action.payload
      break
    }
  }

  return updatedState
}
