import {
  SET_ANECDOTES,
  PAGE_IS_LOADED,
  PAGE_IS_LOADING,
  SET_ANECDOTES_COUNT,
  SET_PAGE
} from '../constants/ActionTypes'
import { combineReducers } from 'redux'

const items = (state = [], action) => {
  switch (action.type) {
    case SET_ANECDOTES:
      return [
        ...action.payload
      ]
    default:
      return state
  }
}

const optionsInitialState = {
  pageIsLoaded: false,
  pageIsLoading: false,
  pageSize: 10,
  pageNumber: 0,
  count: null
}

const options = (state = optionsInitialState, action) => {
  switch (action.type) {
    case PAGE_IS_LOADED:
      return {
        ...state,
        pageIsLoaded: !!action.payload
      }
    case PAGE_IS_LOADING:
      return {
        ...state,
        pageIsLoading: !!action.payload
      }
    case SET_PAGE:
      return {
        ...state,
        pageNumber: action.payload
      }
    case SET_ANECDOTES_COUNT:
      return {
        ...state,
        count: action.payload
      }
    default:
      return state
  }
}

export default combineReducers({
  items,
  options
})