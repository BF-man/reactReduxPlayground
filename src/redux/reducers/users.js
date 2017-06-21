import { normalizeEntities } from '../data-utils'
import { GET_USERS_SUCCESS } from '../actions/users'

const initialState = {}

export default function users (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return { ...state, ...normalizeEntities(action.payload) }
    }
    default: return state
  }
}
