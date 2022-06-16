import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const DataFetch = () => {
    const[post,setPost]=useState([])
    const[limit,setLimit]=useState(20)

    useEffect(()=>{



        // method 1 using json fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(data => setPost(data))
        // .catch(error=>console.log('failed to fetch data'))



        // method2 using axios 
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then(data => setPost(data.slice(0,limit)))
        .catch(error=>console.log('failed to fetch data'))
    },[limit])
  return (
    <>
    
      
{post.map(item=>{
    return <div className="m-3 p-3 shadow">
        <h1>{item.id}: {item.title}</h1>
        <p>{item.body}</p>
    </div>
})}


<div className="d-flex">
{

    limit>20 &&
    <button className="btn btn-primary" onClick={()=>{
        return setLimit(limit-20)
    }}>Show less</button>
}




{
    limit<100 &&
    <button className="btn btn-secondary" onClick={()=>{
        return setLimit(limit+20)
    }}>Show more</button>

}

</div>



    </>
  )
}

export default DataFetch
