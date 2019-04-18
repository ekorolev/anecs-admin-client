import axios from 'axios'
const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms))
const rnd = (from , to) => Math.floor(Math.random()*(to-from)+from)
const prefix = 'http://localhost:3500/api/v1/'

export const login = async (username, password) => {
  const loginResponse = await axios.post(`${prefix}users/login`, {
    username, password
  })
  const userResponse = await axios.get(`${prefix}users/me`, {
    headers: {
      authorization: `Bearer ${loginResponse.data.accessToken}`
    }
  })
  return {
    accessToken: loginResponse.data.accessToken,
    refreshToken: loginResponse.data.refreshToken,
    user: userResponse.data
  }
}

export const register = async (username, password) => {
  const loginResponse = await axios.post(`${prefix}users/register`, {
    username, password
  })
  const userResponse = await axios.get(`${prefix}users/me`, {
    headers: {
      authorization: `Bearer ${loginResponse.data.accessToken}`
    }
  })
  return {
    accessToken: loginResponse.data.accessToken,
    refreshToken: loginResponse.data.refreshToken,
    user: userResponse.data
  }
}

export const logout = async (accessToken) => {
  await sleep(rnd(200, 400))
  return true
}