import { Link } from 'react-router'
import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function HomePage() {
  return (
    <>
      <section className="intro">
        <h1>Hi, I'm Shadiyar</h1>
        <p>
          I'm an IT Management student at KBTU. In this blog I write about what I learn in the
          Interactive Mobile and Web Application Development course, one week at a time.
        </p>
        <Link to="/posts">See all {posts.length} posts</Link>
      </section>

      <h2>Start here</h2>
      <div className="card-grid">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default HomePage
