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

  /* Add page locations to view  */
  const appPageView = strPageView => {
    dispatch({
      type: 'APP_PAGE_VIEW',
      payload: {
        pageView: strPageView
      }
    })
  }

  const value = {
    playlistSlug: state.playlistSlug,
    playlistTrack: state.playlistTrack,
    pageView: state.pageView,
    appPlaylistSlug,
    appPlaylistTrack,
    appPageView
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
