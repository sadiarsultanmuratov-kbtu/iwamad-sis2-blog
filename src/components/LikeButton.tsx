import Button from './ui/Button'
import { useLikes } from '../context/LikesContext'

type LikeButtonProps = {
  postId: number
}

function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes()
  const count = likes[postId] ?? 0 // a post nobody liked yet has no entry → 0

  return <Button onClick={() => addLike(postId)}>♥ Like ({count})</Button>
}

export default LikeButton
