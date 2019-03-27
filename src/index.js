import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'

const ReactApp = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(ReactApp, document.getElementById('root'))