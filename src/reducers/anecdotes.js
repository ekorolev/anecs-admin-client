import {
  SET_ANECDOTES,
  SET_ANECDOTES_COUNT,
  SET_ANECDOTES_LOADING
} from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const anecdotes = (state = [], action) => {
  switch (action.type) {
    case SET_ANECDOTES:
      return [
        ...action.payload
      ]
    default:
      return state
  }
}

const count = (state = 0, action) => {
  switch (action.type) {
    case SET_ANECDOTES_COUNT:
      return action.payload
    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case SET_ANECDOTES_LOADING:
      return !!action.payload
    default:
      return state
  }
}

export default combineReducers({
  anecdotes,
  count,
  isLoading
})