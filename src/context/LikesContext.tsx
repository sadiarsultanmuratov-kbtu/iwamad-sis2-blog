import { createContext, useContext, useState, type ReactNode } from 'react'

// likes for every post, for example { 1: 2, 3: 1 }
type LikesValue = {
  likes: Record<number, number>
  addLike: (postId: number) => void
}

const LikesContext = createContext<LikesValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Record<number, number>>({})

  function addLike(postId: number) {
    setLikes((old) => ({ ...old, [postId]: (old[postId] ?? 0) + 1 }))
  }

  return <LikesContext value={{ likes, addLike }}>{children}</LikesContext>
}

export function useLikes() {
  const value = useContext(LikesContext)
  if (!value) throw new Error('useLikes must be inside LikesProvider')
  return value
}
