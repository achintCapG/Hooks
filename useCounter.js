import {useState} from 'react'

function useCounter(initialCount = 0) {
    const [count, setCount] = useState(initialCount);
    function increment(count) {
        setCount(count + 1);
    }

    function decrement(count) {
        setCount(count - 1);
    }
    function reset() {
        setCount(initialCount);
    }

    return [count, increment, decrement, reset];

}

export default useCounter