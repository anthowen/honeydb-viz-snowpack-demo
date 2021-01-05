import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { CORS_PROXY, API_HOST } from '@utils/const'

export const demoThreatFeedData = [
  {
    remoteHost: '5.188.206.204',
    count: '26',
    lastSeen: '2021-01-05 11:04:52',
  },
  {
    remoteHost: '103.156.92.189',
    count: '16',
    lastSeen: '2021-01-05 10:25:09',
  },
  {
    remoteHost: '45.150.206.114',
    count: '11',
    lastSeen: '2021-01-05 11:54:07',
  },
  {
    remoteHost: '192.35.169.48',
    count: '9',
    lastSeen: '2021-01-04 18:45:50',
  },
  {
    remoteHost: '45.150.206.115',
    count: '8',
    lastSeen: '2021-01-05 12:02:54',
  },
]

const server = setupServer(
  rest.get(`${CORS_PROXY}${API_HOST}/twitter-threat-feed`, (req, res, ctx) => {
    return res(ctx.json(demoThreatFeedData))
  })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
