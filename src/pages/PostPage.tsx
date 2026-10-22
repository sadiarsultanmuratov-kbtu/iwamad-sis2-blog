import { Link, useParams } from 'react-router'
import LikeButton from '../components/LikeButton'
import { posts } from '../data/posts'

function PostPage() {
  const { id } = useParams()
  const post = posts.find((p) => p.id === Number(id)) // id from the URL is a string

  if (!post) {
    return (
      <article className="card">
        <h1>Post not found</h1>
        <p>There is no post with id {id}.</p>
        <Link to="/posts">← Back to all posts</Link>
      </article>
    )
  }

  return (
    <article className="card post">
      <h1>{post.title}</h1>
      <p className="muted">{post.date}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      {post.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
      <LikeButton postId={post.id} />
      <Link to="/posts">← Back to all posts</Link>
    </article>
  )
}

export default PostPage
