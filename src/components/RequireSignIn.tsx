import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'

// A layout route that checks BEFORE it renders:
// signed in → show the page inside (<Outlet />), signed out → go to the sign-in page.
function RequireSignIn() {
  const { signedIn } = useAuth()

  return signedIn ? <Outlet /> : <Navigate to="/signin" replace />
}

export default RequireSignIn
