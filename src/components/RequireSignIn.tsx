import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'

// signed in → show the page, signed out → go to /signin
function RequireSignIn() {
  const { signedIn } = useAuth()

  return signedIn ? <Outlet /> : <Navigate to="/signin" replace />
}

export default RequireSignIn
