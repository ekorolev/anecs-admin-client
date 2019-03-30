import {
  SET_PAPERS,
  SET_PAPERS_COUNT,
  SET_PAPERS_LOADING,
  DELETE_PAPER,
  SET_PAPER_LOADING,
  DECREMENT_PAPERS_COUNT,
  UPDATE_PAPER,
  INCREMENT_PAPERS_COUNT,
  ADD_PAPER
} from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const papers = (state = [], action) => {
  switch (action.type) {
    case SET_PAPERS:
      return [
        ...action.payload
      ]
    case DELETE_PAPER:
      return state.filter(item => item._id !== action.payload)
    case SET_PAPER_LOADING:
      return state.map(paper => {
        if (paper._id === action.payload.id) {
          paper.isLoading = action.payload.isLoading
        }
        return Object.assign({}, paper)
      })
    case UPDATE_PAPER:
      return state.map(paper => {
        if (paper._id === action.payload.id) {
          paper = { ...paper, ...action.payload.update }
        }
        return Object.assign({}, paper)
      })
    case ADD_PAPER:
      return [
        action.payload,
        ...state
      ]
    default:
      return state
  }
}

const count = (state = 0, action) => {
  switch (action.type) {
    case SET_PAPERS_COUNT:
      return action.payload
    case DECREMENT_PAPERS_COUNT:
      return --state
    case INCREMENT_PAPERS_COUNT:
      return ++state
    default:
      return state
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case SET_PAPERS_LOADING:
      return !!action.payload
    default:
      return state
  }
}

export default combineReducers({
  papers,
  count,
  isLoading
})