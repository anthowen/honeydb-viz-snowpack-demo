import * as React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { renderHook } from '@testing-library/react-hooks'
import { dequal } from 'dequal'
import useTwThreatFeed from '../pages/TwitterThreats/useTwThreatFeed'
import { demoThreatFeedData } from './api-mocks'

const queryClient = new QueryClient()
const wrapper: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useTwThreatFeed()', () => {
  it('loads the correct data', async () => {
    const { result, waitFor } = renderHook(() => useTwThreatFeed(), { wrapper })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(dequal(result.current.data, demoThreatFeedData)).toEqual(true)
  })
})
