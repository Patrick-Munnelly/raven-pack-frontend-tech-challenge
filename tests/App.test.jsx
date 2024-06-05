import { render, screen } from '@testing-library/react'
import App from '../src/App'
import { describe, it,expect } from 'vitest'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    expect(screen).toBeTruthy()

  })
})