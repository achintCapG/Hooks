import React, {useState, useEffect} from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000) 
        //console.log('Running useEffect')
        return () => {
            clearInterval(interval)
        }
    },[count])
    


  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalCounter