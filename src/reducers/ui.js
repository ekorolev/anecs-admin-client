import { combineReducers } from 'redux'
import {
  SET_AUTH_LOADING,
  SET_AUTH_ERRORS
} from '../constants/ActionTypes'

const isAuthLoading = function (state = false, action) {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return !!action.payload
    default:
      return state
  }
}

const authErrorsInitialState = {
  username: null,
  password: null,
  general: null,
  hasErrors: false
}
const authErrors = function (state = authErrorsInitialState, action) {
  switch (action.type) {
    case SET_AUTH_ERRORS:
      const errors = {
        ...state,
        ...action.payload
      }
      errors.hasErrors = !!errors.username 
        || !!errors.password
        || !!errors.general
      return errors
    default:
      return state
  }
}

export default combineReducers({
  isAuthLoading,
  authErrors
})