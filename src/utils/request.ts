import axios from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
import { API_HOST, API_ID, API_KEY } from './const'

export const axiosClient = applyCaseMiddleware(
  axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/' + API_HOST,
    headers: {
      Accept: 'application/json',
      'X-HoneyDb-ApiId': API_ID,
      'X-HoneyDb-ApiKey': API_KEY,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  }),
  {
    ignoreHeaders: true,
  }
)
