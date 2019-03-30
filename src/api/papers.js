const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms))
const rnd = (from , to) => Math.floor(Math.random()*(to-from)+from)

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
  _id: `${Math.floor(Math.random()*1000000)+1000000}ADG${Date.now()}`,
  author: 'admin',
  createdAt: Date.now(),
  publishedAt: Date.now(),
  status: 'PUBLISHED',
  text: getText(i),
  title: `Some paper #${i}`
})

const data = []
for (let i = 0; i < 27; i++) data.push(gen(i))

export const getItems = async() => {
  await sleep(rnd(100,500))
  return {
    count: data.length,
    items: data
  }
}

export const deleteItem = async id => {
  await sleep(rnd(500, 1000))
  return {
    message: 'OK'
  }
}

export const getItem = async id => {
  await sleep(rnd(1000, 1500))
  const anec = gen(rnd(1000,10000))
  anec._id = id
  return anec
}

export const saveItem = async (id, update) => {
  await sleep(rnd(1000, 1200))
  return {
    message: 'OK'
  }
}

export const createItem = async (data) => {
  await sleep(rnd(800,900))
  let anec = gen(rnd(1000, 10000))
  anec = { ...anec, ...data }
  return anec
}