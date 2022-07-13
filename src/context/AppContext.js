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

  /* Add video id to state */
  const appTrackId = strTrackId => {
    dispatch({
      type: 'APP_TRACK_ID',
      payload: {
        trackId: strTrackId
      }
    })
  }

  /* Add video playing state */
  const appTrackIsPlaying = boolTrackIsPlaying => {
    dispatch({
      type: 'APP_TRACK_IS_PLAYING',
      payload: {
        trackIsPlaying: boolTrackIsPlaying
      }
    })
  }

  /* Execute play or pause video funtionality */
  const appPlayPauseTrack = funcPlayPauseTrack => {
    dispatch({
      type: 'APP_PLAY_PAUSE_TRACK',
      payload: {
        playPauseTrack: funcPlayPauseTrack
      }
    })
  }

  /* Add next track slug to state */
  const appNextTrack = strNextTrack => {
    dispatch({
      type: 'APP_NEXT_TRACK',
      payload: {
        nextTrack: strNextTrack
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
    trackId: state.trackId,
    trackIsPlaying: state.trackIsPlaying,
    playPauseTrack: state.playPauseTrack,
    nextTrack: state.nextTrack,
    pageView: state.pageView,
    appPlaylistSlug,
    appPlaylistTrack,
    appTrackId,
    appTrackIsPlaying,
    appPlayPauseTrack,
    appNextTrack,
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
