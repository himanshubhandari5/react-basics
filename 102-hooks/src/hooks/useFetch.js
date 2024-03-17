import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true })
  const [error, setError] = useState(null)

  useEffect(() => {
    setState({ data: null, loading: true })
    fetch(url)
      .then(response => {
        console.log('response: ' + JSON.stringify(response.data))
      })
      .catch(e => {
        setState({ data: null, loading: false })
        setError(e.message)
      })
  }, [url])

  return { state, error }
}

export default useFetch