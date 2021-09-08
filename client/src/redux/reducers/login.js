import { LOGIN, LOGOUT, LOADING } from '../types'

const initialState = {
  loading: false,
  user: null,
}

export default function login(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOGIN:
      return {
        ...state,
        loading: false,
        user: payload,
      }
    case LOGOUT:
      return { ...state, user: null, loading: false }
    default:
      return state
  }
}
