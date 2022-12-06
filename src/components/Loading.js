import React, {useContext} from 'react'
import {LoadingContext} from '../context/LoadingContext'

const Loading = () => {
    
  const { isLoading} = useContext(LoadingContext);
  return (
    <div className={`${isLoading ? 'flex' : 'hidden'} h-screen w-full absolute bg-black/5 z-[998] transition-all duration-300  place-items-center`}>
        <div className='w-full'>
            <h1 className='text-2xl text-green-500 text-center'>Loading...</h1>
        </div>
    </div>
  )
}

export default Loading