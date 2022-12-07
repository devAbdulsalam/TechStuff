// import { blogsContext } from '../context/blogsContext'
// import { useContext } from 'react'

export const useBlogsContext = () => {
  //   const context = useContext(blogsContext)
  const context = "blogsContext"

console.log("blogsContext")
  if (!context) {
    throw Error('useBlogsContext must be used inside an BlogsContextProvider')
  }

  return context
}
