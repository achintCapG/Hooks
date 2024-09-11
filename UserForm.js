import React, {useCallback, useState} from 'react'
import useInput from './useInput';

function UserForm() {

const [fname, bindFName, resetFName] = useInput('');
const [lname, bindLName, resetLName] = useInput('');

//  const [fname, setFName] = useState('')
//  const [lname, setLName] = useState('')

 const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${fname} ${lname}`)
    resetFName();
    resetLName();
 }

  return (
    <div>
        <form>
            <div>
                <label>First Name</label>
                <input type='text' {...bindFName} />
            </div>

            <div>
                <label>Last Name</label>
                <input type='text' {...bindLName} />
            </div>
            <div>
                <button type='submit' onClick={e => submitHandler(e)}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm