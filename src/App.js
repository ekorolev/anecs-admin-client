import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import configureStore from './configureStore'

import PrivateRoute from './utils/PrivateRoute'
import AnecdotesPage from './pages/AnecdotesPage'
import PagesPage from './pages/PagesPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AnecdoteViewPage from './pages/AnecdoteViewPage'
import AnecdoteCreate from './pages/AnecdoteCreatePage'

const store = configureStore({
  auth: {
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    credentials: JSON.parse(localStorage.getItem('credentials') || '{}')
  },
  anecdotes: JSON.parse(localStorage.getItem('anecdotes') || '{}')
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/anecdotes"/>)} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/anecdotes/create" component={AnecdoteCreate} />
          <PrivateRoute path="/anecdotes/show/:id" component={AnecdoteViewPage} />
          <PrivateRoute path="/anecdotes/:page?" component={AnecdotesPage} />
          <PrivateRoute path="/pages" component={PagesPage} />
        </Switch>
      </Provider>
    )
  }
}

export default App
