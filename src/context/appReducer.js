export const initialState = {
  playlistSlug: '',
  trackSlug: ''
}

const shopReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'APP_PLAYLIST_SLUG':
      console.log('APP_PLAYLIST_SLUG', payload)
      return {
        ...state,
        playlistSlug: payload.playlistSlug
      }
    case 'APP_TRACK_SLUG':
      console.log('APP_TRACK_SLUG', payload)
      return {
        ...state,
        trackSlug: payload.trackSlug
      }
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`)
  }
}

export default shopReducer
