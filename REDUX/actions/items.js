import { UPDATE_ITEM, DELETE_ITEM, ADD_ITEM, GET_ITEM } from '../types'
import uuid from 'uuid'

export const addItem =
  (item, edit = false) =>
  (dispatch) => {
    if (!edit) {
      const id = uuid.v4()
      dispatch({
        type: ADD_ITEM,
        payload: { text: item.text, id },
      })
    } else {
      dispatch({
        type: UPDATE_ITEM,
        payload: item,
      })
    }
  }

export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: item,
  })
}

export const getItem = (item) => (dispatch) => {
  dispatch({
    type: GET_ITEM,
    payload: item,
  })
}
