import { createContext, useContext, useState, type ReactNode } from 'react'

// likes[postId] = how many times that post was liked, e.g. { 1: 2, 3: 1 }
type LikesContextValue = {
  likes: Record<number, number>
  addLike: (postId: number) => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Record<number, number>>({})

  // Copy the old object and add 1 only for this post — the other posts keep their own value
  const addLike = (postId: number) => {
    setLikes((prev) => ({ ...prev, [postId]: (prev[postId] ?? 0) + 1 }))
  }

  return <LikesContext value={{ likes, addLike }}>{children}</LikesContext>
}

export function useLikes() {
  const value = useContext(LikesContext)
  if (!value) throw new Error('useLikes must be used inside <LikesProvider>')
  return value
}
