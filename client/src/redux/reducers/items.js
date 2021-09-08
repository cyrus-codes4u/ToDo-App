import {
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  GET_ITEM,
  STATE_EDIT,
} from '../types'

const initialState = []

export default function items(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_ITEM:
      return [...state, payload]
    case STATE_EDIT:
    case UPDATE_ITEM:
      const current = [...state]
      const ind = current.findIndex((item) => item.id === payload.id)
      current[ind] = payload
      return [...current]
    // case GET_ITEM:
    //   const specificItem = state.items.find((item) => item.id !== payload.id)
    //   return specificItem
    case DELETE_ITEM:
      const filtered = state.filter((item) => item.id !== payload.id)
      return [...filtered]
    default:
      return state
  }
}
