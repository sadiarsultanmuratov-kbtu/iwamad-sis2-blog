import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function PostsPage() {
  return (
    <>
      <h1>All posts</h1>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}

export default PostsPage
