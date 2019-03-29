import { combineReducers } from 'redux' 

import {
  SET_CREDENTIALS,
  SET_USER
} from '../constants/ActionTypes.js'

const initialCredentialsState = {
  accessToken: null,
  refreshToken: null
}

const credentials = (state = initialCredentialsState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
    default:
      return state
  }
}

const initialUserState = {
  username: null,
  isLoggedIn: false
}

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        isLoggedIn: !!action.payload.username,
        username: action.payload.username
      }
    default:
      return state
  }
}

export default combineReducers({
  user,
  credentials
})