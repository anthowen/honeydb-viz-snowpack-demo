import * as React from 'react'
import { Container, Loader } from '@components'
import type { RouteComponentProps } from '@reach/router'
import useThreatTweets from '../ThreatTweets/useThreatTweets'
import { Tweet } from 'react-twitter-widgets'

type Props = { ipAddress?: string } & RouteComponentProps

export default function ThreatTweets({ ipAddress }: Props) {
  const { status, data, error, isFetching } = useThreatTweets(ipAddress)

  console.log('ipAddress', ipAddress)

  return ipAddress ? (
    <Container title={`Threat tweets on ${ipAddress}`}>
      <p className="mb-4 px-2 md:px-0">
        Here is the list of tweets that reported <b>{ipAddress}</b> directly
        over Twitter.
      </p>
      {status === 'loading' || isFetching ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : status === 'error' ? (
        <span>Error: {error?.message}</span>
      ) : data ? (
        <div className="flex justify-center items-center">
          {data.map((tw) => (
            <div className="my-4">
              <Tweet tweetId={tw.tweetId} />
            </div>
          ))}
        </div>
      ) : null}
    </Container>
  ) : (
    <Container title="404">
      <p className="mb-4 px-2 md:px-0">IP address is not found</p>
    </Container>
  )
}
