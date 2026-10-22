import { createContext, useContext, useState, type ReactNode } from 'react'

// "Signed in" is just one boolean. No passwords, no server (real auth is Week 13).
type AuthContextValue = {
  signedIn: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)

  const signIn = () => setSignedIn(true)
  const signOut = () => setSignedIn(false)

  return <AuthContext value={{ signedIn, signIn, signOut }}>{children}</AuthContext>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside <AuthProvider>')
  return value
}
