import {
  SET_AUTH_LOADING,
  SET_AUTH_ERRORS
} from '../constants/ActionTypes'

export const setAuthLoading = isLoading => ({
  type: SET_AUTH_LOADING,
  payload: isLoading
})

export const setAuthErrors = errors => ({
  type: SET_AUTH_ERRORS,
  payload: errors
})