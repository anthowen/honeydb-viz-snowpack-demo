import * as React from 'react'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}

export default function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre className="text-red-800">{error.message}</pre>
    </div>
  )
}
