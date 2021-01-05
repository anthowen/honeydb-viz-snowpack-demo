import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { Navbar, ErrorFallback } from '@components'
import Routes from './Router'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes />

        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
