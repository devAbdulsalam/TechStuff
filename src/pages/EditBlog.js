import React, {useState, useEffect, useContext} from 'react'
import { useAuthContext } from '../context/useAuthContext'
import { LoadingContext } from '../context/LoadingContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditBlog = () => {
  const navigate = useNavigate()
  const {user} = useAuthContext()  
  const { setIsLoading} = useContext(LoadingContext);
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [content, setContent] = useState('')

  useEffect( () =>{
    setIsLoading(true)
    axios.get(`/blogs/${id}`, {
      headers : {
        "content-type" : "application/json",
        'Authorization' : `Bearer ${user.token}`
      },
    })
    .then((res) => {
            console.log(res)
            setTitle(res.data.title)
            setSubtitle(res.data.subtitle)
            setContent(res.data.content)         
            setIsLoading(false)
          })
          .catch((err) => console.log(err))
        },[id, setIsLoading, user])


// //update blog
    const handleSubmit = async(e) => {
        if(!user){
            return
        }
        e.preventDefault()
        if(title === "" || subtitle === "" || content === ""){
                console.log("fill all input field")
            }else{
                const blog = {title, subtitle, content}
                 setIsLoading(true)
                const response = await fetch(`/blogs`, {
                        method: "PUT",
                        headers : {
                            "content-type" : "application/json",
                            'Authorization' : `Bearer ${user.token}`
                        },
                        body: JSON.stringify(blog)
                    })

                const json = await response.json()
                if (!response.ok) {
                    console.log(json)
                    console.log(blog)
                    setIsLoading(false)
                  }
                  if (response.ok) {                    
                  setIsLoading(false)
                  setTitle('')
                    setSubtitle('')
                    setContent('')
                    console.log('blog updated successfully:', json)
                    navigate('/')
                }
            }
        }
  return (
    <section className='md:h-screen w-full bg-gray-200 py-10'>
        <div className='w-full flex place-content-center p-5 md:p-10'>
            <form onSubmit={handleSubmit} className="rounded-md bg-gray-50 p-2 mx-1 shadow-lg mt-10">
				        <h1 className="text-center text-4xl font-bold py-10">Edit Blog post</h1>
                <div className="row">
                    <label htmlFor="tittle" className='text-xl font-bold p-2'>Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        required
                    />
                </div>
                <div className="row">
                    <label htmlFor="subtitle" className='text-xl font-bold p-2'>Subtitle</label>
                    <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        placeholder="subtitle"
                        className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                </div>
                <div className="row">
                    <label htmlFor="content" className='text-xl font-bold p-2'>Body</label>
                    <textarea
                        type="text"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Body"
                        className="px-3 my-2 py-1.5 text-lg w-full font-normal text-gray-500 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        required
                        cols="50"
                        rows="10"
                    >
                    </textarea>
                </div>
                <div className="relative mb-2">
                  <p className={`${alert ? `top-0` : '-top-5'} w-full p-2 mb-2 absolute font-bold text-center text-lg text-red-500 duration-500`}>{alert}</p>
                </div>
                <div>
                <button type="submit" className="bg-[#228e01] w-full max-w-[300px] mx-auto inline-block text-white py-3 text-xl my-6 rounded font-bold">Update blog</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default EditBlog