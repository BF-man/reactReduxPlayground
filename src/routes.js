import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import Layout from './views'
import Home from './views/Home'

// basic token auth
// import { loggedIn } from './utils/auth'

const NotFound = () => <h4>Not found</h4>

export default (
  <Route>
    <Route path="/" component={Layout}>
      <IndexRedirect to="home" />
      <Route path="home" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
)

// Example - add onEnter to the route in order to check auth
// function requireAuth (nextState, replace) {
//   if (!loggedIn()) {
//     replace({ pathname: '/login' })
//   }
// }
