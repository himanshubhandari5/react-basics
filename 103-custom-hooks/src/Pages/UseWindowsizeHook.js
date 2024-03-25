import { useState, useEffect } from "react"

const UseWindowsizeHook = () => {
  const [windowSize, setWindowSize] = useState({ loading: true, height: undefined, width: undefined })

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize((windowSize) => ({ ...windowSize, height: window.innerHeight, width: window.innerWidth, loading: false }))
    }
    handleWindowResize()
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <>
      <p>Size: </p>
      {Object.keys(windowSize).map(key => (
        <p key={key}>{key}: {windowSize[key]}</p>
      ))}
    </>
  )
}

export default UseWindowsizeHook
