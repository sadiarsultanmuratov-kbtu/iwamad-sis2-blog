import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LikeButton from './LikeButton'
import { LikesProvider } from '../context/LikesContext'

it('adds a like when the button is clicked', async () => {
  // Arrange
  render(
    <LikesProvider>
      <LikeButton postId={1} />
    </LikesProvider>,
  )
  const button = screen.getByRole('button')

  // Act
  await userEvent.click(button)
  await userEvent.click(button)

  // Assert
  expect(button).toHaveTextContent('Like (2)')
})

it('keeps a separate count for each post', async () => {
  render(
    <LikesProvider>
      <LikeButton postId={1} />
      <LikeButton postId={2} />
    </LikesProvider>,
  )
  const [first, second] = screen.getAllByRole('button')

  await userEvent.click(first)

  expect(first).toHaveTextContent('Like (1)')
  expect(second).toHaveTextContent('Like (0)')
})
