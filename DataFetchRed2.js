import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  todos: {}
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS': 
      return {
        loading: false,
        error: '',
        todos: action.payload
      }
    
    case 'FETCH_ERROR': 
      return {
        loading: false,
        error: 'Something went wrong',
        todos: {}
      }
    
    default:
      return state
  }
}

function DataFetchRed2() {

    const [state, dispatch] = useReducer(reducer, initialState); 

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos/2')
      .then(res => {            
          console.log(res)
          dispatch({type:'FETCH_SUCCESS', payload: res.data})
      }
      )
      .catch(err => {
          dispatch({type: 'FETCH_ERROR'})
      })
  },[])

  return (
    <div>
        Post - 
        {state.loading ? 'Loading': state.todos.title  }
        {state.error ? state.error: null}
    </div>
  )
}

export default DataFetchRed2