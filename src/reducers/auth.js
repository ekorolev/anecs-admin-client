import {
  SET_CREDENTIALS
} from '../constants/ActionTypes.js'

const initialState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  errors: {},
  user: {}
}

export default function example(state = initialState, action) {
  switch (action.type) {
    case SET_CREDENTIALS:
      return {
        isAuthenticated: !!action.payload.accessToken,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        user: action.payload.user
      }
    default:
      return state
  }
}