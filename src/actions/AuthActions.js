import {
  SET_CREDENTIALS,
  SET_USER
} from '../constants/ActionTypes.js'
import {
  setAuthErrors,
  setAuthLoading
} from './UIActions'
import {
  login as apiLogin,
  logout as apiLogout
} from '../api'

export const setCredentials = (credentials) => ({
  type: SET_CREDENTIALS,
  payload: credentials
})

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})

export const login = (username, password) => async dispatch => {
  dispatch(setAuthLoading(true))
  let response = null
  try {
    response = await apiLogin(username, password)
  } catch(e) {
    dispatch(setAuthLoading(false))
    dispatch(setAuthErrors({
      general: e.response
    }))
    return
  }
  const credentials = {
    accessToken: response.accessToken,
    refreshToken: response.refreshToken
  }
  response.user.isLoggedIn = true
  dispatch(setCredentials(credentials))
  dispatch(setUser(response.user))
  dispatch(setAuthLoading(false))
  localStorage.setItem('credentials', JSON.stringify(credentials))
  localStorage.setItem('user', JSON.stringify(response.user))
}

export const logout = (accessToken) => async dispatch => {
  dispatch(setUser({}))
  dispatch(setCredentials({}))
  localStorage.removeItem('credentials')
  localStorage.removeItem('user')
  apiLogout(accessToken)
}
