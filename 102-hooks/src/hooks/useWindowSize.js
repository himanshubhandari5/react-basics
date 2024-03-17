import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [windowsSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowsSize
}

export default useWindowSize