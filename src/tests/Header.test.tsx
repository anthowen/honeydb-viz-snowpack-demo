import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from '@components'

describe('<Header>', () => {
  it('renders the correct title', () => {
    render(<Header title="Unit test" />)

    // screen.logTestingPlaygroundURL()

    expect(screen.getByRole('heading')).toHaveTextContent('Unit test')
  })
})
