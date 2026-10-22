import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

function SignInPage() {
  const { signedIn, setSignedIn } = useAuth()
  const navigate = useNavigate()

  function handleSignIn() {
    setSignedIn(true)
    navigate('/drafts')
  }

  return (
    <article className="card">
      <h1>Sign in</h1>
      {signedIn ? (
        <p>You are already signed in.</p>
      ) : (
        <>
          <p>Drafts are only for the author. Please sign in to see them.</p>
          <button className="btn" onClick={handleSignIn}>Sign in</button>
        </>
      )}
    </article>
  )
}

export default SignInPage
