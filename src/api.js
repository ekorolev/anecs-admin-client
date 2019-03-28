const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms))
const rnd = (from , to) => Math.floor(Math.random()*(to-from)+from)

export const login = async (username, password) => {
  await sleep(rnd())
  return {
    accessToken: 'test',
    refreshToken: 'test',
    user: {
      username
    }
  }
}