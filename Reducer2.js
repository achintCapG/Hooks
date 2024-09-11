import React, {useReducer} from 'react'

function Reducer2() {

    const initialState = {
      firstCount : 0,
      secondCount: 10,
    }
    const reducer = (state, action) => {
        switch(action.type) {
          case 'Increment':
            return { ...state, firstCount: state.firstCount + action.value}
          case 'Decrement': 
            return { ...state, firstCount: state.firstCount - action.value}
          case 'Increment2':
            return { ...state, secondCount: state.secondCount + action.value}
          case 'Decrement2': 
            return { ...state, secondCount: state.secondCount - action.value}
          case 'Reset':
            return initialState
          default:
            return state
        }   
    }

    const [count, dispatch] = useReducer(reducer,initialState);

  return (
    <div>
        Count - {count.firstCount}
        
        <button onClick={() =>dispatch({type: 'Increment', value: 1})}>Increment</button> 
        <button onClick={() =>dispatch({type: 'Decrement', value: 1})}>Decrement</button> 
        <button onClick={() =>dispatch({type: 'Increment', value: 5})}>Increment 5</button> 
        <button onClick={() =>dispatch({type: 'Decrement', value: 5})}>Decrement 5</button> 
        
        <button onClick={() =>dispatch({type: 'Reset'})}>Reset</button> 

        <div>
        Second Count - {count.secondCount}
        <button onClick={() =>dispatch({type: 'Increment2', value: 5})}>Increment 5</button> 
        <button onClick={() =>dispatch({type: 'Decrement2', value: 5})}>Decrement 5</button> 
        </div>
    </div>

  )
}

export default Reducer2