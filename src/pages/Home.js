import React, {useEffect, useState} from 'react'
import {useAuthContext} from '../context/useAuthContext'
import axios from 'axios'
import Blog from '../components/Blog'

const Home = () => {
    const {user} = useAuthContext()
    const [blogs, setBlogs] = useState('')
    const [loading, setLoading] = useState(true)
    const [alert, setAlert] = useState(null)
    useEffect(() => {
        if(!user){
          setAlert("user not available")
          return
        }
         axios.get("/blogs",
            {headers: {'Authorization' : `Bearer ${user.token}`}}
          )
          .then((res) => {
              setBlogs(res.data)
              setLoading(false)
            })
          .catch((err) => {
              console.log(err)
              console.log(err.response.data.message)
              setAlert("not found")
              setLoading(false)
            })
    },[user])
  return (
    <header
      id="home"
      className="min-h-screen flex py-10  flex-col items-center bg-gray-200"
    >
        <div className='w-full mt-10 py-3 pl-8'>
            <h1 className="text-3xl font-bold  text-red-800 text-center">
                All Blogs
            </h1>
        </div>
        {loading ? 
          <div>
            <p className='text-center text-blue-500 text-2xl'>Loading</p>
          </div> :
          <div className="w-full">
              { !blogs.length <= 0 ? blogs.map((blog) =>(<Blog key={blog._id} blog={blog}/>)) 
                : 
              <p className='text-center text-red-500 text-2xl'>{alert}</p>
              }
          </div>
            }
    </header>
  )
}

export default Home