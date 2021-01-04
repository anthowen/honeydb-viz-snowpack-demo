import * as React from 'react'
import { Router, Redirect, RouteComponentProps } from '@reach/router'

import BadHosts from '../BadHosts'
import TwitterThreats from '../TwitterThreats'

let Home = (paths: RouteComponentProps) => <Redirect path="/" to="/bad-hosts" />
const NotFound = (paths: RouteComponentProps) => <h2>404</h2>

export default function AppRoutes() {
  return (
    <Router>
      <Home path="/" />
      <BadHosts path="/bad-hosts" />
      <TwitterThreats path="/twitter-threats" />
      <NotFound default />
    </Router>
  )
}
