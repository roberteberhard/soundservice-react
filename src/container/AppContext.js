import { createContext, useReducer, useContext } from 'react'
import appReducer, { initialState } from './appReducer'

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  /* Show content after the page preload animation */
  const appIsLoaded = isLoaded => {
    dispatch({
      type: 'APP_IS_LOADED',
      payload: {
        loaded: isLoaded
      }
    })
  }

  /* Stop animate navlinks by page routing  */
  const appIsMounted = isMounted => {
    dispatch({
      type: 'APP_IS_MOUNTED',
      payload: {
        mounted: isMounted
      }
    })
  }

  const value = {
    loaded: state.loaded,
    mounted: state.mounted,
    appIsLoaded,
    appIsMounted
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
