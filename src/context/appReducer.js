export const initialState = {
  playlistSlug: '',
  playlistTrack: '',
  trackId: '',
  nextTrack: '',
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
    case 'APP_NEXT_TRACK':
      //console.log('APP_NEXT_TRACK', payload)
      return {
        ...state,
        nextTrack: payload.nextTrack
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
