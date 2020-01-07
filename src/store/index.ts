import { combineReducers } from 'redux'
import { createStore } from 'redux';
import User from './user'

const reducer = combineReducers({
    User,
 })
const store = createStore(reducer)
export default store