import React, {useState, useEffect} from 'react'

function HookMouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

const logPosition = (e) => {
  console.log('Setting Mouse position')
  setX(e.clientX);
  setY(e.clientY)
} 

  useEffect(() => {
    console.log('Mouse UseEffect')
    window.addEventListener('mousemove', logPosition)

    return () => {
      console.log('Component Unmounting Code')
      window.removeEventListener('mousemove', logPosition)
    } 
  },[])

  return (
    <div>Mouse X- {X} Y- {Y}</div>
  )
}

export default HookMouse