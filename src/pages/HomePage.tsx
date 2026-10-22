import { Link } from 'react-router'
import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function HomePage() {
  return (
    <>
      <section className="hero">
        {/* BASE_URL = /iwamad-sis2-blog/ on GitHub Pages */}
        <img src={`${import.meta.env.BASE_URL}shadiyar.jpg`} alt="Shadiyar" className="photo" />
        <div>
          <h1>Hi, I'm Shadiyar 👋</h1>
          <p>
            I study IT Management at KBTU. Every week in the web development course I learn
            something new, and in this blog I write about it in simple words.
          </p>
          <Link to="/posts" className="btn">Read all {posts.length} posts</Link>
        </div>
      </section>

      <h2>Latest posts</h2>
      <div className="grid">
        {posts.slice(-3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default HomePage
