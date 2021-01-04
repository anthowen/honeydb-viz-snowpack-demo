import * as React from 'react'
import { Container, Loader } from '@components'
import type { RouteComponentProps } from '@reach/router'
import type { BadHost } from '@types'
import useTwThreadFeed from './useTwThreadFeed'
import Table from './Table'
import type { Column } from 'react-table'

type Props = {} & RouteComponentProps

export default function TwitterThreats(props: Props) {
  const columns = React.useMemo<Column<BadHost>[]>(
    () => [
      {
        Header: 'Remote Host',
        accessor: 'remoteHost' as keyof BadHost,
      },
      {
        Header: 'Count',
        accessor: 'count' as keyof BadHost,
      },
      {
        Header: 'Last seen',
        accessor: 'lastSeen' as keyof BadHost,
      },
    ],
    []
  )

  const { status, data, error } = useTwThreadFeed()

  return (
    <Container title="Twitter Threat Feed">
      {status === 'loading' ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : status === 'error' ? (
        <span>Error: {error?.message}</span>
      ) : data ? (
        <Table<BadHost> columns={columns} data={data} />
      ) : null}
    </Container>
  )
}
