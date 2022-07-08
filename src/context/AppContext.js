import { createContext, useReducer, useContext } from 'react'
import appReducer, { initialState } from './appReducer'

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  /* Show content after the page preload animation */
  const appPlaylistSlug = numPlaylistSlug => {
    dispatch({
      type: 'APP_PLAYLIST_SLUG',
      payload: {
        playlistSlug: numPlaylistSlug
      }
    })
  }

  /* Stop animate navlinks by page routing  */
  const appTrackSlug = numTrackSlug => {
    dispatch({
      type: 'APP_TRACK_SLUG',
      payload: {
        trackSlug: numTrackSlug
      }
    })
  }

  const value = {
    playlistSlug: state.playlistSlug,
    trackSlug: state.trackSlug,
    appPlaylistSlug,
    appTrackSlug
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