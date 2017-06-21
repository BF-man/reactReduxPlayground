import { keyBy } from 'lodash'
import { getCurrentPropertyId } from '../.../../utils/auth'

/**
 * Normalize entities
 *
 * [{ id: 1, data }] => { 1: { id: 1, data } }
 *
 * @param {Array} entities
 * @param {String} key
 * @return {Object}
 */

export function normalizeEntities (entitiesList, key = 'id') {
  return keyBy(entitiesList, key)
}

export function rehydrateStore () {
  return {
    users: {
      1: { name: 'Ace Ventura', profession: 'Pet detective' },
      2: { name: 'John Wayne', profession: 'Batman' },
      3: { name: 'Big Lebowski', profession: 'Boozer' }
    }
  }
}
