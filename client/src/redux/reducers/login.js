import { LOGIN, LOGOUT, LOADING, LOGIN_FAIL } from '../types'

const initialState = {
  loading: false,
  user: localStorage.user ? JSON.parse(localStorage.getItem('user')) : null,
  error: null,
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
      localStorage.setItem('user', JSON.stringify(payload))
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      }
    case LOGIN_FAIL:
      localStorage.clear()
      return {
        ...state,
        loading: false,
        error: payload,
      }
    case LOGOUT:
      localStorage.clear()
      return { ...state, user: null, loading: false }
    default:
      return state
  }
}
