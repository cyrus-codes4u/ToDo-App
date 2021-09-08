import { LOGIN, LOGIN_FAIL, LOGOUT, LOADING } from '../types'

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
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}
