import React, {useContext} from 'react'
import { UserContext } from '../App'
function Context2() {

    const user = useContext(UserContext)

  return (
    <div>Context2 - {user}</div>
  )
}

export default Context2