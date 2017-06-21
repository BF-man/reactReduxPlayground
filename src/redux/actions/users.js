import { getUsersFake } from '../../api/users'

export const GET_USERS_REQUEST = 'users/GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'users/GET_USERS_ERROR'

export function loadUsers () {
  return dispatch => {
    dispatch({ type: GET_USERS_REQUEST })

    const promise = getUsersFake()
      .then(({ data: users }) => {
        dispatch({ type: GET_USERS_SUCCESS, payload: users })
      })
      .catch(({ response }) => {
        let error
        if (response) { error = response.data.error }
        dispatch({
          type: GET_USERS_ERROR,
          payload: [error].filter(n => n)
        })
      })
    return promise
  }
}
