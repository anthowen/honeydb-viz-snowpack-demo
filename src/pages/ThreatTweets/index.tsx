import * as React from 'react'
import { Tweet } from 'react-twitter-widgets'
import { navigate, RouteComponentProps } from '@reach/router'
import { Container, Loader } from '@components'
import useThreatTweets from '../ThreatTweets/useThreatTweets'

type Props = { ipAddress?: string } & RouteComponentProps

export default function ThreatTweets({ ipAddress }: Props) {
  const { status, data, error } = useThreatTweets(ipAddress)

  const handleBackClick = () => {
    navigate(-1)
  }

  return ipAddress ? (
    <Container title={`Threat tweets on ${ipAddress}`}>
      {status === 'loading' ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : status === 'error' ? (
        <span>Error: {error?.message}</span>
      ) : data ? (
        <>
          <p className="mb-4 px-2 md:px-0">
            {data.length > 0 ? (
              <>
                There {data.length > 1 ? 'have' : 'has'} been {data.length}{' '}
                {data.length > 1 ? 'tweets' : 'tweet'} that reported{' '}
                <b>{ipAddress}</b> directly over Twitter.
              </>
            ) : (
              'No tweets found'
            )}
            {/* <span
              className="cursor-pointer text-blue-500 hover:text-blue-700 hover:underline ml-1"
              onClick={handleBackClick}>
              {'< Back to the list'}
            </span> */}
          </p>
          <div className="flex flex-col justify-center items-center">
            {data.map((tw) => (
              <div className="px-2 my-2 w-full">
                <Tweet tweetId={tw.tweetId} />
              </div>
            ))}
          </div>
        </>
      ) : null}
    </Container>
  ) : (
    <Container title="404">
      <p className="mb-4 px-2 md:px-0">IP address is not found</p>
    </Container>
  )
}
