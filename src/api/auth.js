const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms))
const rnd = (from , to) => Math.floor(Math.random()*(to-from)+from)

export const login = async (username, password) => {
  await sleep(rnd(600, 1000))
  return {
    accessToken: 'test',
    refreshToken: 'test',
    user: {
      username
    }
  }
}

export const logout = async (accessToken) => {
  await sleep(rnd(200, 400))
  return true
}