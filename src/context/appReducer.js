export const initialState = {
  playlistSlug: '',
  playlistTrack: '',
  trackName: '',
  trackId: '',
  trackIsPlaying: false,
  playPauseTrack: '',
  nextTrack: '',
  attachToBottom: false,
  pageView: ''
}

const shopReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'APP_PLAYLIST_SLUG':
      //console.log('APP_PLAYLIST_SLUG', payload)
      return {
        ...state,
        playlistSlug: payload.playlistSlug
      }
    case 'APP_PLAYLIST_TRACK':
      //console.log('APP_PLAYLIST_TRACK', payload)
      return {
        ...state,
        playlistTrack: payload.playlistTrack
      }
    case 'APP_TRACK_ID':
      //console.log('APP_TRACK_ID', payload)
      return {
        ...state,
        trackId: payload.trackId
      }
    case 'APP_TRACK_NAME':
      //console.log('APP_TRACK_NAME', payload)
      return {
        ...state,
        trackName: payload.trackName
      }
    case 'APP_TRACK_IS_PLAYING':
      //console.log('APP_TRACK_IS_PLAYING', payload)
      return {
        ...state,
        trackIsPlaying: payload.trackIsPlaying
      }
    case 'APP_PLAY_PAUSE_TRACK':
      //console.log('APP_PLAY_PAUSE_TRACK', payload)
      return {
        ...state,
        playPauseTrack: payload.playPauseTrack
      }
    case 'APP_NEXT_TRACK':
      //console.log('APP_NEXT_TRACK', payload)
      return {
        ...state,
        nextTrack: payload.nextTrack
      }
    case 'APP_ATTACH_TO_BOTTOM':
      //console.log('APP_ATTACH_TO_BOTTOM', payload)
      return {
        ...state,
        attachToBottom: payload.attachToBottom
      }

    case 'APP_PAGE_VIEW':
      //console.log('APP_PAGE_VIEW', payload)
      return {
        ...state,
        pageView: payload.pageView
      }
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`)
  }
}

export default shopReducer
