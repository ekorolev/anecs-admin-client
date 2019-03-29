import { combineReducers } from 'redux'
import auth from './auth'
import ui from './ui'
import anecdotes from './anecdotes'

export default combineReducers({
  auth,
  ui,
  anecdotes
})