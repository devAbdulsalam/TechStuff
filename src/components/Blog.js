import React from 'react'
import {Link} from 'react-router-dom'
// date-fms
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Blog = ({blog}) => {
    const {_id, title, createdAt, subtitle, content} = blog
  return (
    <div key={_id} className='my-6 bg-white p-2 md:w-11/12 mx-auto'>
        <Link to={`/${_id}`}>
            <h1 className="text-4xl py-2 text-red-800 hover:text-red-600 font-bold cursor-pointer uppercase">{title}</h1>
        </Link>
        <h2 className='text-2xl capitalize'>{subtitle}</h2>
        <p className='capitalize text-xl pt-2 leading-6'>{content}</p>
        <p className='capitalize text-xl pt-2 leading-6'>{createdAt}</p>
        <p className='capitalize text-xl pt-2 font-bold'>{formatDistanceToNow(new Date(createdAt), {addSuffix : true})}</p>
    </div>
)
}

export default Blog