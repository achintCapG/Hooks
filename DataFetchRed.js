import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetchRed() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/2')
        .then(res => {            
            console.log(res)
            setPost(res.data)
            setLoading(false)
        }
        )
        .catch(err => {
            setError('Something went wrong')
            setPost({})
        })
    },[])
  return (
    <div>
        Post - 
        {loading ? 'loading' : posts.title }
        {error ? error : null}
    </div>
  )
}

export default DataFetchRed