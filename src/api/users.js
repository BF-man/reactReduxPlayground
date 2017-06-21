import client from '../utils/apiClient'

export function createUser (payload) {
  return client.post('/users', payload)
}

export function updateUser (id, payload) {
  return client.put(`/users/${id}`, payload)
}

export function getUsers () {
  return client.get('/members')
}

export function getUsersFake () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: [{ id: 4, name: 'Sponge Bob', profession: 'Sponge' },
        { id: 5, name: 'Ellen Ripley', profession: 'Xenomorph Killer' },
        { id: 6, name: 'Vasya', profession: 'Hobo' }
      ]})
    }, 1000)
  })
  return promise
}
