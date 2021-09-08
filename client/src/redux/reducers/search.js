import { SEARCH_QUERY } from '../types'

const initialState = ''

export default function login(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SEARCH_QUERY:
      return payload
    default:
      return state
  }
}
