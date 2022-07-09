export const initialState = {
  playlistSlug: '',
  playlistTrack: '',
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
    case 'APP_PLAYLIST_TRACK':
      //console.log('APP_PLAYLIST_TRACK', payload)
      return {
        ...state,
        playlistTrack: payload.playlistTrack
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
