import { useLikes } from '../context/LikesContext'

type LikeButtonProps = {
  postId: number
}

function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes()
  const count = likes[postId] ?? 0 // no likes yet = 0

  return (
    <button className="btn" onClick={() => addLike(postId)}>
      ♥ Like ({count})
    </button>
  )
}

export default LikeButton
