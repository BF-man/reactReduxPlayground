import 'core-js/es6'
import 'core-js/stage/4'
import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux'
import routes from './routes'
import history from './history'
// import { injectAuthorizationWatcher, injectCurrentPropertyHeader } from './utils/apiClient'

import './index.css'

const $root = document.getElementById('bf-App')

const renderView = (Routes) => render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  $root
)

// Check helpers apiClient
// injectAuthorizationWatcher(store)
// injectCurrentPropertyHeader(store)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoutes = require('./routes')
    renderView(NextRoutes)
  })
}

renderView(routes)
