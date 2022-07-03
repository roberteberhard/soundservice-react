export const initialState = {
  loaded: false,
  mounted: false
}

const shopReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'APP_IS_LOADED':
      //console.log('APP_IS_LOADED', payload)
      return {
        ...state,
        loaded: payload.loaded
      }
    case 'APP_IS_MOUNTED':
      //console.log('APP_IS_MOUNTED', payload)
      return {
        ...state,
        mounted: payload.mounted
      }
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`)
  }
}

export default shopReducer
