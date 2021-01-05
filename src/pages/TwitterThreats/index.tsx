import * as React from 'react'
import type { Column } from 'react-table'
import { Container, Loader } from '@components'
import type { RouteComponentProps } from '@reach/router'
import type { BadHost } from '@types'
import useTwThreatFeed from './useTwThreatFeed'
import Table from './Table'

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

  const { status, data, error, isFetching } = useTwThreatFeed()

  return (
    <Container title="Twitter Threat Feed">
      <p className="mb-4 px-2 md:px-0">
        <b>Twitter threat feed</b> provides a list of bad hosts that have
        connected or attempted to connect to other honeypots on the Internet
        (even honeypots that do not directly send data to HoneyDB). The source
        of this bad host information is based on tweets by these other
        honeypots, example:
        <a
          href="https://honeydb.io/#twitter"
          target="_blank"
          className="cursor-pointer text-blue-500 hover:text-blue-700 hover:underline ml-1">
          https://honeydb.io/#twitter
        </a>
        . Here is the feed data reported during the last 24 hours.
      </p>
      {status === 'loading' || isFetching ? (
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
