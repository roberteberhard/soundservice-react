export const initialState = {
  playlistSlug: '',
  trackSlug: '',
  numberTracks: 0,
  pageHome: false,
  videoTrack: {
    id: 0,
    index: 0,
    artist: '',
    title: ''
  }
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
    case 'APP_NUMBER_TRACKS':
      //console.log('APP_NUMBER_TRACKS', payload)
      return {
        ...state,
        numberTracks: payload.numberTracks
      }
    case 'APP_PAGE_HOME':
      //console.log('APP_PAGE_HOME', payload)
      return {
        ...state,
        pageHome: payload.pageHome
      }
    case 'APP_VIDEO_TRACK':
      //console.log('APP_VIDEO_TRACK', payload)
      return {
        ...state,
        videoTrack: payload.videoTrack
      }
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`)
  }
}

export default shopReducer
