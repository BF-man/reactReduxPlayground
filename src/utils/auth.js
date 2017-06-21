import store from 'store'
export const tokenKey = 'Access-Token'

export const loggedIn = () => {
  const token = getToken()
  return token && token.length > 0
}

export const logOut = () => {
  store.remove(tokenKey)
}

export const logIn = (authToken) => {
  store.set(tokenKey, authToken)
}

export const getToken = () => {
  return store.get(tokenKey)
}
