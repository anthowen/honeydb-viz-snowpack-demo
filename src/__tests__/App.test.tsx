import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../pages/App'
import { renderWithRouter } from './utils'

describe('<App>', () => {
  it('renders without crash', () => {
    render(<App />)
  })

  it('renders/navigates the correct page', async () => {
    const {
      history: { navigate },
    } = renderWithRouter(<App />, { route: '/bad-hosts' })

    expect(
      screen.getByRole('heading', {
        name: /bad hosts/i,
      })
    ).toBeInTheDocument()

    // screen.logTestingPlaygroundURL()

    // with reach-router we don't need to simulate a click event, we can just transition
    // to the page using the navigate function returned from the history object.
    await navigate('/twitter-threats')
    expect(
      screen.getByRole('heading', {
        name: /twitter threat feed/i,
      })
    ).toBeInTheDocument()
  })

  it('redirects to 404 page on a bad route', () => {
    const { container } = renderWithRouter(<App />, {
      route: '/something-that-does-not-match',
    })

    expect(container.innerHTML).toMatch('404')
  })
})
