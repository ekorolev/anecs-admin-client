import {
  SET_CREDENTIALS
} from '../constants/ActionTypes.js'

export const authenticate = (user, accessToken, refreshToken) => ({
  type: SET_CREDENTIALS,
  payload: {
    user,
    accessToken,
    refreshToken
  }
})