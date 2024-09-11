import React, {useState} from 'react'

function CounterOne() {
    const [count, setCount] = useState(0);

    function increment(count) {
        setCount(count + 1);
    }

    function decrement(count) {
        setCount(count - 1);
    }
    function reset(count) {
        setCount(0);
    }

  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => increment(count)}>Increment</button>
        <button onClick={() => decrement(count)}>Decrement</button>
        <button onClick={() => reset(count)}>Reset</button>
    </div>
  )
}

export default CounterOne