import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

it('adds a like on click', async () => {
  render(
    <LikesProvider>
      <LikeButton postId={1} />
    </LikesProvider>,
  )
  const button = screen.getByRole('button')

  await userEvent.click(button)
  await userEvent.click(button)

  expect(button).toHaveTextContent('Like (2)')
})
