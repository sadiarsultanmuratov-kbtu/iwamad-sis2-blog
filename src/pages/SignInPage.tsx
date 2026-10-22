import { useNavigate } from 'react-router'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'

function SignInPage() {
  const { signedIn, signIn } = useAuth()
  const navigate = useNavigate()

  const handleSignIn = () => {
    signIn()
    navigate('/drafts') // after signing in, open the protected page
  }

  return (
    <Card>
      <h1>Sign in</h1>
      {signedIn ? (
        <p>You are already signed in.</p>
      ) : (
        <>
          <p>The Drafts page is only for the author. Sign in to open it.</p>
          <Button onClick={handleSignIn}>Sign in</Button>
        </>
      )}
    </Card>
  )
}

export default SignInPage
