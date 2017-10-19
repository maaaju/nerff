import { combineReducers } from 'redux'
import tutor from './tutor'

// Combine reducers
const itemApp = combineReducers({
  tutor,
})

export default itemApp
