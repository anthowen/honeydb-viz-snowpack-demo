import { useQuery } from 'react-query'
import axios from 'axios'
import { axiosClient } from '@utils/request'
import type { BadHost } from '@types'

const getTwThreatFeed = async () => {
  // Create a new CancelToken source for this request
  const source = axios.CancelToken.source()
  const { data } = await axiosClient.get('/twitter-threat-feed', {
    cancelToken: source.token,
  })

  // Cancel the request if React Query calls the `promise.cancel` method
  data.cancel = () => {
    source.cancel('Query was cancelled by React Query')
  }

  return data
}

export default function useTwThreatFeed() {
  return useQuery<BadHost[], Error>('twitter-threat-feed', getTwThreatFeed)
}

// return useQuery<BadHost[], Error>('twitter-threat-feed', getTwThreatFeed, {
//   onSuccess: (data) => {
//     for (const badHost of data) {
//       axios
//         .get(`http://ip-api.com/json/${badHost.remoteHost}`)
//         .then((location) => {
//           console.log(badHost.remoteHost, location)
//         })
//     }
//   },
// })
