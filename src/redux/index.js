import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { isDev } from '../utils/env'
import reducers from './reducers'
import { rehydrateStore } from './data-utils'

/**
 * Init Store.
 */

const middlewares = [thunk]

if (isDev) {
  const reduxLogger = require('redux-logger')
  middlewares.push(reduxLogger({ duration: true, collapsed: true }))
}

export const store = createStore(
  reducers, rehydrateStore(), compose(
    applyMiddleware(...middlewares),
    isDev && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default
    store.replaceReducer(nextReducer)
  })
}
