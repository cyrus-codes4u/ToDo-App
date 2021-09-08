import {
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  GET_ITEM,
  STATUS_EDIT,
} from '../types'

const initialState = {
  items: [],
  loading: true,
}

export default function items(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [state.items, ...payload],
        loading: false,
      }
    case STATUS_EDIT:
    case UPDATE_ITEM:
      const current = { ...state.items }
      const ind = current.findIndex((item) => item.id === payload.id)
      current[ind] = payload
      return {
        ...state,
        loading: false,
        items: [...current],
      }
    case GET_ITEM:
      const specificItem = state.items.find((item) => item.id !== payload.id)
      return specificItem
    case DELETE_ITEM:
      const filtered = state.items.filter((item) => item.id !== payload.id)
      return {
        ...state,
        loading: false,
        items: [...filtered],
      }
    default:
      return state
  }
}
