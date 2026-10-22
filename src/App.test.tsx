import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { LikesProvider } from './context/LikesContext'

// opens the app at any URL
function openAt(url: string) {
  render(
    <MemoryRouter initialEntries={[url]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>,
  )
}

it('sends a signed-out reader from /drafts to sign in', () => {
  openAt('/drafts')
  expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
})

it('shows the 404 page for an unknown URL', () => {
  openAt('/banana')
  expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
})
