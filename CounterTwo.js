import React, {useState} from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => increment(count)}>Increment</button>
        <button onClick={() => decrement(count)}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
    </div>
  )
}

export default CounterTwo