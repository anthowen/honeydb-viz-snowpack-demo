import * as React from 'react'
import Header from './Header'

interface Props {
  children?: React.ReactNode
  title: string
}

export default function Container({ children, title }: Props) {
  return (
    <>
      <Header title={title} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  )
}
