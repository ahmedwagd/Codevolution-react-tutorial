import React, { useState } from 'react'

function CounterFunc() {
  const [count, setCount] = useState(0)
  const increaseCounter = () => setCount((prev) => prev + 1)
  const decreaseCounter = () => setCount((prev) => prev - 1)
  const increaseCounterFive = () => {
    increaseCounter()
    increaseCounter()
    increaseCounter()
    increaseCounter()
    increaseCounter()
  }
  return (
    <div>
      <h1>CounterFunc</h1>
      <p>{count}</p>
      <button onClick={() => increaseCounter()} >+1</button>
      <button onClick={() => increaseCounterFive()} >+5</button>
      <button onClick={() => decreaseCounter()}>-1</button>
    </div>
  )
}

export default CounterFunc