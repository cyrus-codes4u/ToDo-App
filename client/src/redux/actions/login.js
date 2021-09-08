import { LOGIN, LOGIN_FAIL, LOGOUT, LOADING } from '../types'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const body = JSON.stringify({ email, password })

  try {
    dispatch({
      type: LOADING,
    })
    const res = await axios.post(
      'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
      body,
      config
    )
    dispatch({
      type: LOGIN,
      payload: res.data,
    })
  } catch (err) {
    console.error(err.message)
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}
