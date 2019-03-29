import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import configureStore from './configureStore'

import PrivateRoute from './utils/PrivateRoute'
import AnecdotesPage from './pages/AnecdotesPage'
import PagesPage from './pages/PagesPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'

const store = configureStore({
  auth: {
    user: JSON.parse(localStorage.getItem('user') || '{}'),
    credentials: JSON.parse(localStorage.getItem('credentials') || '{}')
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/anecdotes"/>)} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/anecdotes" component={AnecdotesPage} />
          <PrivateRoute path="/pages" component={PagesPage} />
        </Switch>
      </Provider>
    )
  }
}

export default App
