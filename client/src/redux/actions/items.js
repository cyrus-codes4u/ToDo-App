import {
  UPDATE_ITEM,
  DELETE_ITEM,
  ADD_ITEM,
  GET_ITEM,
  STATE_EDIT,
} from '../types'
import { v4 } from 'uuid'

export const addItem =
  (item, edit = false) =>
  (dispatch) => {
    if (!edit) {
      const id = v4()
      dispatch({
        type: ADD_ITEM,
        payload: { text: item.text, id, edit: false },
      })
    } else {
      dispatch({
        type: UPDATE_ITEM,
        payload: { ...item, edit: false },
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

export const editItem = (item) => (dispatch) => {
  dispatch({
    type: STATE_EDIT,
    payload: { ...item, edit: true },
  })
}
