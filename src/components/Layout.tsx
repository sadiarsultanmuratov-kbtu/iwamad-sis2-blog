import { NavLink, Outlet } from 'react-router'
import { useAuth } from '../context/AuthContext'

function Layout() {
  const { signedIn, setSignedIn } = useAuth()

  return (
    <>
      <header className="header">
        <span className="logo">Shadiyar's Blog</span>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/drafts">Drafts</NavLink>
          {signedIn ? (
            <button className="btn btn-light" onClick={() => setSignedIn(false)}>
              Sign out
            </button>
          ) : (
            <NavLink to="/signin">Sign in</NavLink>
          )}
        </nav>
      </header>

      {/* only this part changes when the page changes */}
      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">© 2026 Sultanmuratov Shadiyar</footer>
    </>
  )
}

export default Layout
