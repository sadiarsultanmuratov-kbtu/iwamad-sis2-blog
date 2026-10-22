import { Link } from 'react-router'
import type { Post } from '../data/posts'
import { useLikes } from '../context/LikesContext'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  const { likes } = useLikes()

  return (
    <article className="card">
      <h2>{post.title}</h2>
      <p className="muted">
        {post.date} · ♥ {likes[post.id] ?? 0}
      </p>
      <p>{post.summary}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <Link to={`/posts/${post.id}`}>Read more →</Link>
    </article>
  )
}

export default PostCard
