import * as React from 'react'
import { Router, Redirect, RouteComponentProps } from '@reach/router'

import BadHosts from '../BadHosts'
import TwitterThreats from '../TwitterThreats'
import ThreatTweets from '../ThreatTweets'

let Home = (paths: RouteComponentProps) => <Redirect path="/" to="/bad-hosts" />
const NotFound = (paths: RouteComponentProps) => (
  <h2 className="p-4 text-2xl">404</h2>
)

export default function AppRoutes() {
  return (
    <Router>
      <Home path="/" />
      <BadHosts path="/bad-hosts" />
      <ThreatTweets path="/threat-tweets/:ipAddress" />
      <TwitterThreats path="/twitter-threats" />
      <NotFound default />
    </Router>
  )
}
