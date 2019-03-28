import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStore } from 'redux'
import reducers from './reducers'

import AnecdotesPage from './pages/AnecdotesPage'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/anecdotes"/>)} />
          <Route path="/login" render={() => (<div>Login</div>)} />
          <Route path="/anecdotes" component={AnecdotesPage} />
        </Switch>
      </Provider>
    )
  }
}

export default App
