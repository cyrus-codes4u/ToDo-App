import { SEARCH_QUERY } from '../types'

export const updateSearchQuery = (searchText) => (dispatch) => {
  dispatch({
    type: SEARCH_QUERY,
    payload: searchText,
  })
}
