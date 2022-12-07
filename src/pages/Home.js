import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {BlogContext} from '../context/BlogContext'
import {LoadingContext} from '../context/LoadingContext'
import Blog from '../components/Blog'

const Home = () => {  
  const { isLoading} = useContext(LoadingContext);
  const { blogs, alert} = useContext(BlogContext);

  const [searchInput, setSearchInput] = useState('')
    const searchBlog = () =>{
      console.log("search for blog")
    }
  return (
    <header
      id="home"
      className="min-h-screen flex pt-10 pb-1 flex-col items-center bg-gray-50"
    >
        <div className='w-full flex justify-center mt-6 px-2 bg-black'>
          <div className='w-full md:w-10/12 mx-auto flex justify-between mt-6 p-2'>
            <Link to={`/`}>
                <h1 className="text-xl md:text-3xl py-2 font-bold  text-white text-center">
                    All Blogs
                </h1>
              </Link>
            <div className="w-4/6 max-w-60 relative flex items-stretch  border-gray-50 rounded transition ease-in-out focus:text-gray-700">
                <input
                    value={searchInput}
                    onInput={(e)=> setSearchInput(e.target.value.toLowerCase())}
                    type="text"
                    className="px-2 py-2 text-lg w-80 min-w-[250px] bg-gray-50 font-normal text-gray-800 bg-clip-padding border-0 border-gray-300 rounded transition ease-in-out m-0"
                    placeholder="Search Posts"
                />
                <button
                    onClick={searchBlog}
                    className="btn inline-block absolute top-0 right-0 h-[99%] px-5 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out "
                    type="button"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        className="w-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                    </svg>
                </button>
            </div>
          </div>
        </div>
        {isLoading ? 
          <div>
            <p className='text-center text-blue-500 text-3xl'>Loading</p>
          </div> :
          <div className="w-full md:w-10/12 mx-auto">
              {blogs && blogs.length >= 0 ? blogs.map((blog) =>(<Blog key={blog._id} blog={blog}/>)) 
                : 
              <div className='pt-10'>
                <p className='text-center font-semibold text-2xl'>{alert}</p>
              </div>
              }
          </div>
            }
    </header>
  )
}

export default Home