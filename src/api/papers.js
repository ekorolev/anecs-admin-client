const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms))
const rnd = (from , to) => Math.floor(Math.random()*(to-from)+from)

const getText = (i) => `

# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
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