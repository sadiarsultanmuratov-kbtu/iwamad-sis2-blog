import { Link, useParams } from 'react-router'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import LikeButton from '../components/LikeButton'
import { posts } from '../data/posts'

function PostPage() {
  const { id } = useParams() // the URL is text: "2", not 2
  const post = posts.find((p) => p.id === Number(id))

  // Every lookup can miss: /posts/999 shows a message, never a blank page
  if (!post) {
    return (
      <Card>
        <h1>Post not found</h1>
        <p>There is no post with id {id}.</p>
        <Link to="/posts">Back to all posts</Link>
      </Card>
    )
  }

  return (
    <Card>
      <h1>{post.title}</h1>
      <p className="meta">{post.date}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <LikeButton postId={post.id} />
      <Link to="/posts">← Back to all posts</Link>
    </Card>
  )
}

export default PostPage
