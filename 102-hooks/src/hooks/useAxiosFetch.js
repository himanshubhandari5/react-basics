import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([])
  const [fetchError, setfetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    // Taking reference, so if required we can cancel the request
    const source = axios.CancelToken.source()

    const fetchData = async (url) => {
      setIsLoading(true)
      try {
        const response = await axios.get(url, {
          cancelToken: source.token
        })
        if (isMounted) {
          setData(response.data)
          console.log('response: ' + JSON.stringify(response.data))
          setfetchError(null)
        }
      } catch (error) {
        if (isMounted) {
          setfetchError(error.message)
          setData([])
        }
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    fetchData(dataUrl)

    // clean up
    const cleanUp = () => {
      isMounted = false
      source.cancel()
    }
    return cleanUp
  }, [dataUrl])
  return { data, fetchError, isLoading }
}

export default useAxiosFetch