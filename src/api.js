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

const gen = (i = -1) => ({
  _id: `${Math.random()*1000000+1000000}${Date.now()}`,
  author: 'admin',
  createdAt: Date.now(),
  publishedAt: Date.now(),
  status: 'PUBLISHED',
  text: `Some funny text${ i >= 0 ? ` with number #${i}` : ``}`
})

const data = []
for (let i = 0; i < 55; i++) data.push(gen(i))
export const getAnecdotes = async(page, pageSize) => {
  await sleep(rnd(100,500))
  const start = page*pageSize
  const stop = (page+1)*pageSize
  return {
    count: data.length,
    anecdotes: data.slice(start, stop)
  }
}