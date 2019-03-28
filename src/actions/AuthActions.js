import {
  SET_CREDENTIALS
} from '../constants/ActionTypes.js'

export function authenticate(username, password) {
  return {
    type: SET_CREDENTIALS,
    payload: {
      accessToken: 'example',
      refreshToken: 'example',
      user: {
        username: 'test_user'
      }
    }
  }
}