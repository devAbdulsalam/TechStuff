import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/useAuthContext'

export const useLogout = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuthContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('sharauser')

    navigate('/login')
    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
  }

  return { logout }
}