import { createContext, useContext, useState, type ReactNode } from 'react'

type AuthValue = {
  signedIn: boolean
  setSignedIn: (value: boolean) => void
}

const AuthContext = createContext<AuthValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)

  return <AuthContext value={{ signedIn, setSignedIn }}>{children}</AuthContext>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be inside AuthProvider')
  return value
}
