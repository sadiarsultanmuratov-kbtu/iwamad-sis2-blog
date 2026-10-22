import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import PostsPage from './PostsPage'
import { LikesProvider } from '../context/LikesContext'
import { posts } from '../data/posts'

it('shows one card for every post', () => {
  render(
    <MemoryRouter>
      <LikesProvider>
        <PostsPage />
      </LikesProvider>
    </MemoryRouter>,
  )

  expect(screen.getAllByRole('article')).toHaveLength(posts.length)
})
