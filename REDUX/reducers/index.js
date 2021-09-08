import { combineReducers } from 'redux'
import login from './login'
import search from './search'
import items from './items'

export default combineReducers({
  login,
  items,
  search,
})
