import { Link } from 'react-router'
import Card from './ui/Card'
import Tag from './ui/Tag'
import { useLikes } from '../context/LikesContext'
import type { Post } from '../data/posts'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  const { likes } = useLikes()

  return (
    <Card>
      <h2 className="card-title">{post.title}</h2>
      <p className="meta">
        {post.date} · ♥ {likes[post.id] ?? 0}
      </p>
      <p>{post.excerpt}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <Link to={`/posts/${post.id}`}>Read more</Link>
    </Card>
  )
}

export default PostCard
