import React, { useState } from "react"

const UseStateHook = () => {
  const [message, setMessage] = useState("Default Value set during useState")
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 })

  const increaseCount = () => {
    setCount((currentState) => ({
      ...currentState,
      count: count + 1,
      count2: count2 + 2
    }))
  }

  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <div>count1: {count}</div>
      <div>count2: {count2}</div>
    </div>
  )
}

export default UseStateHook