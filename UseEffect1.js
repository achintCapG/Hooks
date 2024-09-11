import React, {useState, useEffect} from 'react'

function UseEffect1() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
      document.title = `Count is ${count}`;
      console.log('Name = ',name)
    }, [count])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default UseEffect1