import { createContext, useReducer, useContext } from 'react'
import appReducer, { initialState } from './appReducer'

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  /* Add routing query parameter 'track' to state */
  const appPlaylistSlug = strPlaylistSlug => {
    dispatch({
      type: 'APP_PLAYLIST_SLUG',
      payload: {
        playlistSlug: strPlaylistSlug
      }
    })
  }

  /* Add the routing query parameter 'slug' to state */
  const appTrackSlug = strTrackSlug => {
    dispatch({
      type: 'APP_TRACK_SLUG',
      payload: {
        trackSlug: strTrackSlug
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

  const value = {
    playlistSlug: state.playlistSlug,
    trackSlug: state.trackSlug,
    pageHome: state.pageHome,
    appPlaylistSlug,
    appTrackSlug,
    appPageHome
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
