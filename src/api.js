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

const getText = (i) => `
#${i}: Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since 
the 1500s, when an unknown printer took a 
galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`

const gen = (i = -1) => ({
  _id: `${Math.random()*1000000+1000000}${Date.now()}`,
  author: 'admin',
  createdAt: Date.now(),
  publishedAt: Date.now(),
  status: 'PUBLISHED',
  text: getText(i)
})

const data = []
for (let i = 0; i < 41; i++) data.push(gen(i))
export const getAnecdotes = async() => {
  await sleep(rnd(100,500))
  return {
    count: data.length,
    anecdotes: data
  }
}