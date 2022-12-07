import React from 'react'
import {Link} from 'react-router-dom'
// date-fms
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Blog = ({blog}) => {
    const {_id, title, createdAt, subtitle, author, content} = blog
  return (
    <div key={_id} className='border-b border-gray-200 bg-white p-2 md:w-11/12 mx-auto'>
        <Link to={`/${_id}`}>
            <h1 className="text-2xl md:text-4xl py-2 text-red-800 hover:text-red-600 font-bold cursor-pointer uppercase">{title}</h1>
        </Link>
        <p className='capitalize text-xl pt-2 '>{formatDistanceToNow(new Date(createdAt), {addSuffix : true})}</p>
        <h2 className='text-xl font-bold md:text-2xl capitalize'>{subtitle}</h2>
        <p className='capitalize text-lg md:text-xl py-2 leading-6'>{content.slice(0, 150)}</p>
        {author ? <p className='capitalize text-xl pt-2 leading-6 font-bold'>By {author}</p> : ""}
    </div>
)
}

export default Blog