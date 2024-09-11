import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idButton, setIdButton] = useState(1);

    const clickHandler = () => {
        setIdButton(id);
    }

    useEffect(() => {
        // console.log(id);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.lof(err)
        })
    }, [idButton])
  return (
    <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={clickHandler}>Fetch Data</button>
        
        <div>{post.title}</div>
        {/* <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title} </li>
            ))}
        </ul> */}
    </div>
  )
}

export default DataFetching