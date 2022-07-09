import { createContext, useReducer, useContext } from 'react'
import appReducer, { initialState } from './appReducer'

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  /* Add routing query parameter 'slug' to state */
  const appPlaylistSlug = strPlaylistSlug => {
    dispatch({
      type: 'APP_PLAYLIST_SLUG',
      payload: {
        playlistSlug: strPlaylistSlug
      }
    })
  }

  /* Add the routing query parameter 'track' to state */
  const appPlaylistTrack = strPlaylistTrack => {
    dispatch({
      type: 'APP_PLAYLIST_TRACK',
      payload: {
        playlistTrack: strPlaylistTrack
      }
    })
  }

  /* Add the playlist track amounts to the state */
  const appNumberTracks = numNumberTracks => {
    dispatch({
      type: 'APP_NUMBER_TRACKS',
      payload: {
        numberTracks: numNumberTracks
      }
    })
  }

  /* Add home location if true  */
  const appPageHome = isPageHome => {
    dispatch({
      type: 'APP_PAGE_HOME',
      payload: {
        pageHome: isPageHome
      }
    })
  }

  /*   */
  const appVideoTrack = objVideoTrack => {
    dispatch({
      type: 'APP_VIDEO_TRACK',
      payload: {
        videoTrack: objVideoTrack
      }
    })
  }

  const value = {
    playlistSlug: state.playlistSlug,
    playlistTrack: state.playlistTrack,
    numberTracks: state.numberTracks,
    pageHome: state.pageHome,
    videoTrack: state.videoTrack,
    appPlaylistSlug,
    appPlaylistTrack,
    appNumberTracks,
    appPageHome,
    appVideoTrack
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useShop = () => {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useShop must be used within AppContext')
  }

  return context
}

export default useShop
