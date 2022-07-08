import { useEffect, useState } from 'react'

const useAxios = configObj => {
  const [response, setResponse] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [controller, setController] = useState()

  const axiosFetch = async configObjs => {
    const { axiosInstance, method, url, requestConfig = {} } = configObjs
    try {
      setLoading(true)
      const ctrl = new AbortController()
      setController(ctrl)
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal
      })
      //console.log(res)
      setResponse(res.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => controller && controller.abort()
  }, [controller])

  return [response, error, loading, axiosFetch]
}

export default useAxios
