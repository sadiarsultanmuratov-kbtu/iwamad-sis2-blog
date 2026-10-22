import { Link, NavLink } from 'react-router'
import logo from '../assets/logo.svg'
import Button from './ui/Button'
import { useAuth } from '../context/AuthContext'

function Header() {
  const { signedIn, signOut } = useAuth()

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <span>Shadiyar's Blog</span>
      </Link>

      <nav className="site-nav" aria-label="Main">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/drafts">Drafts</NavLink>
        {signedIn ? (
          <Button variant="secondary" onClick={signOut}>Sign out</Button>
        ) : (
          <NavLink to="/signin">Sign in</NavLink>
        )}
      </nav>
    </header>
  )
}

export default Header
