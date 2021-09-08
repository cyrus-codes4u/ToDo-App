import { getLocalItems, setLocalItems } from '../../utils/actions'
import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, STATE_EDIT } from '../types'

const initialState = localStorage.items ? getLocalItems() : []

export default function items(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_ITEM:
      setLocalItems([...state, payload])
      return [...state, payload]
    case STATE_EDIT:
    case UPDATE_ITEM:
      const current = [...state]
      const ind = current.findIndex((item) => item.id === payload.id)
      current[ind] = payload
      setLocalItems(current)
      return [...current]
    case DELETE_ITEM:
      const filtered = state.filter((item) => item.id !== payload.id)
      setLocalItems(filtered)
      return [...filtered]
    default:
      return state
  }
}
