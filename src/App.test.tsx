import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { LikesProvider } from './context/LikesContext'

// Start the whole app at any URL, like typing it in the address bar
function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>,
  )
}

it('shows the sign-in page when a signed-out reader opens /drafts', () => {
  renderAt('/drafts')

  expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
})

it('opens the drafts page after signing in', async () => {
  renderAt('/drafts')

  await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

  expect(screen.getByRole('heading', { name: 'My drafts' })).toBeInTheDocument()
})

it('shows the 404 page for an unknown URL', () => {
  renderAt('/banana')

  expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
})
