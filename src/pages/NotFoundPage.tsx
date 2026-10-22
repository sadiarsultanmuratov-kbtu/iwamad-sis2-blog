import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <article className="card">
      <h1>404 — Page not found</h1>
      <p>Sorry, this page does not exist.</p>
      <Link to="/">← Back to Home</Link>
    </article>
  )
}

export default NotFoundPage
