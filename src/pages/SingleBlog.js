import React, {useState, useEffect} from 'react'
import {useAuthContext} from '../context/useAuthContext'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const SingleBlog = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {user} = useAuthContext()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if(!user){
            return
        }
        axios.get(`/blogs/${id}`,{
            headers: {'Authorization' : `Bearer ${user.token}`}})
        .then((res) => {
                setLoading(false)
                setBlog(res.data)
            })
            .catch((err) => {
                setError(true)
                console.log(err)
            })
        },[id, user])

    // //delete blog
    const handleDelete = () => {
        if(!user){
            return
        }
        setLoading(true)
        axios.delete(`/blogs/${id}`, {headers: {'Authorization' : `Bearer ${user.token}`}})
        .then((res) => {
            console.log(res)
            setLoading(false)
            navigate('/')
            })
           .catch((err) => console.log(err))
        }
    // //update blog
    const handleEdit = () => {
        navigate(`/edit-blog/${id}`)
        
        }

    return (
        <section className="min-h-screen flex py-10  flex-col items-center bg-gray-200">
            {loading ? 
                <div className='mt-10'>
                    <p className='text-center text-blue-500 text-2xl'>Loading</p>
                </div> :
                <div className='w-full mt-10 p-2 bg-white md:w-11/12 mx-auto'>
                    <h1 className="text-2xl py-2 font-bold ">{blog.title}</h1>
                    <h2 className='text-xl'>{blog.subtitle}</h2>
                    <p>{blog.content}</p>
                    <div className='pt-10 pb-2'>
                        <button onClick={() => navigate(-1)}  className="p-2 bg-green-50 hover:bg-green-100 text-green-500 rounded-md mx-2">
                            <ion-icon name="return-down-back-outline" size="large"></ion-icon>
                        </button>
                        <button onClick={handleEdit}  className="p-2 cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-md  mx-2">
                            <ion-icon name="create-outline" size="large"></ion-icon>
                        </button>
                        <button onClick={handleDelete} className="p-2 bg-gray-50 hover:bg-red-100 text-red-500 rounded-md cursor-pointer mx-3">
                            <ion-icon name="trash" size="large" ></ion-icon>
                        </button>
                    </div>
                </div>
            }
            { error ? <div className="">
                    <p className='text-center text-red-500 text-2xl'>No post</p>
                </div>
            : ""}
    </section>
  )
}

export default SingleBlog