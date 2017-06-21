import { values } from 'lodash'
import { createSelector } from 'reselect'

const getUsers = state => state.users

export const getUsersList = createSelector(
  getUsers,
  types => values(types)
)
