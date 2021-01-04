import * as React from 'react'
import ReactTooltip from 'react-tooltip'
import type { RouteComponentProps } from '@reach/router'
import { Container, Loader } from '@components'
import MapChart from './MapChart'
import useVulnerabilityCsv from './useVulnerabilityCsv'

type Props = {} & RouteComponentProps

export default function BadHosts(props: Props) {
  const [content, setContent] = React.useState('')
  const { status, data, error } = useVulnerabilityCsv()

  return (
    <Container title="Bad Hosts">
      {status === 'loading' ? (
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
