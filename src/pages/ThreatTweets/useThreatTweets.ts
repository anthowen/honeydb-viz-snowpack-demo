import { useQuery } from 'react-query'
import { axiosClient } from '@utils/request'
import type { ThreatTweet } from '@types'

const getThreatTweetsByIpAddress = async (ipAddress?: string) => {
  if (!ipAddress) throw new Error('IP address is not provided')

  const { data } = await axiosClient.get(`/twitter-threat-feed/${ipAddress}`)

  return data
}

export default function useThreatTweets(ipAddress?: string) {
  return useQuery<ThreatTweet[], Error>(['threat-tweets', ipAddress], () =>
    getThreatTweetsByIpAddress(ipAddress)
  )
}
