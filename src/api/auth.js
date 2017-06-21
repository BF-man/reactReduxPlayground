import client from '../utils/apiClient'

export function logIn (payload) {
  return client.post('/sessions', payload)
}
