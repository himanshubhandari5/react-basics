import React, { useState } from "react"
import { useEffect } from "react"

const UseEffectHook = () => {
  const [number, setNumber] = useState(
    JSON.parse(localStorage.getItem("number")) || 0
  )

  useEffect(() => {
    console.log("useEffect called in render: ", number)
    localStorage.setItem("number", JSON.stringify(number))
    return () => {
      console.log("cleanup function")
    }
  }, [number])

  return (
    <div>
      <div>Number: {number}</div>
      <button onClick={() => setNumber((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook