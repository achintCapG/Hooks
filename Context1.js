import React from 'react'
import { UserContext } from '../App'

function Context1() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                    <div>Context1: You are {user}</div>
                    )
                }
            }

        </UserContext.Consumer>
    
    </div>
  )
}

export default Context1