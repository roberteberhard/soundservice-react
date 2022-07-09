export const initialState = {
  playlistSlug: '',
  trackSlug: '',
  pageHome: false
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
    case 'APP_TRACK_SLUG':
      //console.log('APP_TRACK_SLUG', payload)
      return {
        ...state,
        trackSlug: payload.trackSlug
      }
    case 'APP_PAGE_HOME':
      //console.log('APP_PAGE_HOME', payload)
      return {
        ...state,
        pageHome: payload.pageHome
      }
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`)
  }
}

export default shopReducer
