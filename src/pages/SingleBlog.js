import React, {useState, useEffect, useContext} from 'react'
import {useAuthContext} from '../context/useAuthContext'
import {LoadingContext} from '../context/LoadingContext'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const SingleBlog = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {user} = useAuthContext()
    const [blog, setBlog] = useState(null)       
    const {setIsLoading} = useContext(LoadingContext);
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`/blogs/${id}`)
        .then((res) => {
                setIsLoading(false)
                setBlog(res.data)     
            })
            .catch((err) => {
                setError(true)
                console.log(err)
            })
        },[id, setIsLoading])

    // //delete blog
    const handleDelete = () => {
        if(!user){
            return
        }
        setIsLoading(true)
        axios.delete(`/blogs/${id}`, {headers: {'Authorization' : `Bearer ${user.token}`}})
        .then((res) => {
            console.log(res.data)
            setIsLoading(false)
            navigate('/')
            })
           .catch((err) => console.log(err))
        }
    // //update blog
    const handleEdit = () => {
        navigate(`/edit-blog/${id}`)
        
        }
    // //update blog
    const handleRating = () => {
        console.log("star")
        
        }

    return (
        <section className="min-h-screen flex py-10  flex-col items-center bg-gray-200">
            <div className='w-full mt-10 pt-10 p-2 bg-white md:w-11/12 mx-auto'>
                <h1 className="text-2xl py-2 font-bold ">{blog?.title}</h1>
                <h2 className='text-xl'>{blog?.subtitle}</h2>
                <p>{blog?.content}</p>
                <p>{blog?.author}</p>
                {user && blog?.user_id ? 
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
                    :
                    <div className='pt-10 pb-2'>
                        <button onClick={() => navigate(-1)}  className="p-2 bg-green-50 hover:bg-green-100 text-green-500 rounded-md mx-2">
                            <ion-icon name="return-down-back-outline" size="large"></ion-icon>
                        </button>
                        <button onClick={handleRating}  className="pl-4 p-2 cursor-pointer bg-gold-500 hover:bg-yellow-100 text-gold-500 rounded-md">
                            <ion-icon name="star-outline" size="large"></ion-icon>
                        </button> 
                        <button onClick={handleRating}  className="p-2 cursor-pointer bg-gold-500 hover:bg-yellow-100 text-gold-500 rounded-md">
                            <ion-icon name="star-outline" size="large"></ion-icon>
                        </button> 
                        <button onClick={handleRating}  className="p-2 cursor-pointer bg-gold-500 hover:bg-yellow-100 text-gold-500 rounded-md">
                            <ion-icon name="star-outline" size="large"></ion-icon>
                        </button>
                        <button onClick={handleRating}  className="p-2 cursor-pointer bg-gold-500 hover:bg-yellow-100 text-gold-500 rounded-md">
                            <ion-icon name="star-outline" size="large"></ion-icon>
                        </button>
                        <button onClick={handleRating}  className="p-2 cursor-pointer bg-gold-500 hover:bg-yellow-100 text-gold-500 rounded-md">
                            <ion-icon name="star-outline" size="large"></ion-icon>
                        </button>
                    </div>
                    }
            </div>
            { error ? <div className="">
                    <p className='text-center text-red-500 text-2xl'>No post</p>
                </div>
            : ""}
    </section>
  )
}

export default SingleBlog