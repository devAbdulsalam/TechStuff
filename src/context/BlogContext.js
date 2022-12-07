import React, { useState, useEffect, createContext, useContext } from 'react';
import {LoadingContext} from './LoadingContext';
import axios from 'axios';

// create context
export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  //  Blogs state
  const { setIsLoading} = useContext(LoadingContext);
  const [ blogs, setBlogs] = useState([]);
  const [alert, setAlert] = useState(null);
  // fetch  Blogs
  useEffect(() => {
      setIsLoading(true)
    const fetchBlogs = async () =>{
        axios.get("/blogs")
          .then((res) => {
              console.log(res.data)
              setBlogs(res.data)
              setIsLoading(false)
            })
          .catch((err) => {
              setAlert(err.message)
              setIsLoading(false)
            })
       }
      fetchBlogs()
  },[setIsLoading])
  console.log(blogs)
  return (
    < BlogContext.Provider value={{ blogs, alert }}>
      {children}
    </ BlogContext.Provider>
  );
};

export default BlogProvider;
