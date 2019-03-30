import {
  SET_ANECDOTES,
  SET_ANECDOTES_COUNT,
  SET_ANECDOTES_LOADING,
  DELETE_ANECDOTE,
  SET_ANECDOTE_LOADING,
  DECREMENT_ANECDOTES_COUNT,
  UPDATE_ANECDOTE
} from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const anecdotes = (state = [], action) => {
  switch (action.type) {
    case SET_ANECDOTES:
      return [
        ...action.payload
      ]
    case DELETE_ANECDOTE:
      return state.filter(item => item._id !== action.payload)
    case SET_ANECDOTE_LOADING:
      return state.map(anec => {
        if (anec._id === action.payload.id) {
          anec.isLoading = action.payload.isLoading
        }
        return Object.assign({}, anec)
      })
    case UPDATE_ANECDOTE:
      return state.map(anec => {
        if (anec._id === action.payload.id) {
          anec = { ...anec, ...action.payload.update }
        }
        return Object.assign({}, anec)
      })
    default:
      return state
  }
}

const count = (state = 0, action) => {
  switch (action.type) {
    case SET_ANECDOTES_COUNT:
      return action.payload
    case DECREMENT_ANECDOTES_COUNT:
      return --state
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