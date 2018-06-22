import { combineReducers } from 'redux';
import user from './user'
import asyncComponentWillMount from './asyncComponentWillMount'

export default combineReducers({
  user,
  asyncComponentWillMount
})