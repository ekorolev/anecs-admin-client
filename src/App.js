import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStore } from 'redux'
import reducers from './reducers'

import AnecdotesPage from './pages/AnecdotesPage'
import PagesPage from './pages/PagesPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/anecdotes"/>)} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/anecdotes" component={AnecdotesPage} />
          <Route path="/pages" component={PagesPage} />
        </Switch>
      </Provider>
    )
  }
}

export default App
