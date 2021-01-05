import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import type { RouteComponentProps } from '@reach/router'
import { Container, Loader } from '@components'
import MapChart from './MapChart'
import useVulnerabilityCsv from './useVulnerabilityCsv'

type Props = {} & RouteComponentProps

export default function BadHosts(props: Props) {
  const [content, setContent] = React.useState('')
  const { status, data, error, isFetching } = useVulnerabilityCsv()

  return (
    <Container title="Bad Hosts">
      <p className="mb-4 px-2 md:px-0">
        This is a{' '}
        <a
          href="https://en.wikipedia.org/wiki/Choropleth_map"
          target="_blank"
          className="cursor-pointer border-dotted border-b-2 border-gray-900">
          choropleth map chart
        </a>{' '}
        representing the reported bad hosts over the countries worldwide. . A{' '}
        <b>bad host</b> is a host on the Internet that has connected or
        attempted to connect to one of the honeypots that feed data to HoneyDB.
        In general, there is no legitimate reason for any host to connect to
        these honeypots. So those that do can be considered bad, and a potential
        threat. If you see connectivity from any of these hosts on your network
        it may be malicious and may require some investigation. &nbsp;
        <i>
          <b>Disclaimer:</b>&nbsp;The data provided for this map is dummy.
        </i>
      </p>
      {status === 'loading' || isFetching ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : status === 'error' ? (
        <span>Error: {error?.message}</span>
      ) : data ? (
        <>
          <MapChart setTooltipContent={setContent} data={data} />
          <ReactTooltip>{content}</ReactTooltip>
        </>
      ) : null}
    </Container>
  )
}
