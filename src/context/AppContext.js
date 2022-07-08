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

  /* Add a random 'slug' and 'track' valur for the Home play button  */
  const appStartRandom = objStartRandom => {
    dispatch({
      type: 'APP_START_RANDOM',
      payload: {
        startRandom: objStartRandom
      }
    })
  }

  const value = {
    playlistSlug: state.playlistSlug,
    trackSlug: state.trackSlug,
    startRandom: state.startRandom,
    appPlaylistSlug,
    appTrackSlug,
    appStartRandom
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
