import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Navbar } from '@components'
import Routes from '../pages/App/Router'
import { renderWithRouter } from './utils'

const queryClient = new QueryClient()

const setup = (route = '/bad-hosts') => {
  const utils = renderWithRouter(
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes />
    </QueryClientProvider>,
    { route }
  )

  return utils
}

describe('<Navbar>', () => {
  it("activates 'Bad Hosts' menu option", () => {
    setup()

    // screen.logTestingPlaygroundURL()

    // activated menu option should have 'bg-gray-900' CSS class applied
    expect(
      screen.getAllByRole('link', {
        name: /bad hosts/i,
      })[0].classList
    ).toContain('bg-gray-900')

    // the other menu options should have 'text-gray-300' CSS class applied
    expect(
      screen.getAllByRole('link', {
        name: /twitter threat feed/i,
      })[0].classList
    ).toContain('text-gray-300')
  })

  it("activates 'Twitter Threat Feed' menu option", () => {
    setup('/twitter-threats')

    // activated menu option should have 'bg-gray-900' CSS class applied
    expect(
      screen.getAllByRole('link', {
        name: /twitter threat feed/i,
      })[0].classList
    ).toContain('bg-gray-900')

    // the other menu options should have 'text-gray-300' CSS class applied
    expect(
      screen.getAllByRole('link', {
        name: /bad hosts/i,
      })[0].classList
    ).toContain('text-gray-300')
  })
})
