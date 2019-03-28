import React from 'react'
import { connect } from 'react-redux'
import './loginPage.scss'
import { authenticate } from '../../actions/AuthActions'

import LoginForm from '../../components/LoginForm'

const LoginPage = function ({ history, login }) {

  const onSubmit = async (username, password) => {
    await login(username, password)
    history.push('/')
  }

  return (
    <div className="screen-center">
      <div className="login-form">
        <LoginForm
          onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  async login (username, password) {
    dispatch(await authenticate(username, password))
  }
})

export default connect(null, mapDispatchToProps)(LoginPage)