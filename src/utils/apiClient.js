import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'
// For examples to make everything clear
// import { getToken, tokenKey, propertyKey } from './auth'
// import { logOut } from '../redux/actions/auth'
// import { getCurrentPropertyId } from '../redux/selectors/currentPropertyId'

// const UNAUTHORIZED = 401

const instance = axios.create({
  baseURL: process.env.API_BASE_URL
})

instance.interceptors.request.use((request) => {
  const data = request.data
  if (data) {
    request.data = decamelizeKeys(data)
  }
  return request
})

instance.interceptors.response.use((response) => {
  const data = response.data
  if (data) {
    response.data = camelizeKeys(data)
  }
  return response
})

// Example of AuthorizationWatcher - check index js

// export const injectAuthorizationWatcher = (store) => {
//   instance.interceptors.response.use(function (response) {
//     return response
//   }, function (error) {
//     if (error.response && error.response.status === UNAUTHORIZED) {
//       store.dispatch(logOut())
//     }
//     return Promise.reject(error)
//   })
// }

// Example of adding header from store - check index js

// export const injectCurrentPropertyHeader = (store) => {
//   instance.interceptors.request.use((request) => {
//     request.headers[propertyKey] = getCurrentPropertyId(store.getState())
//     return request
//   })
// }

export default instance
