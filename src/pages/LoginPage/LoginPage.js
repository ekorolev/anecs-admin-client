import React from 'react'
import { connect } from 'react-redux'
import './loginPage.scss'
import { login } from '../../actions/AuthActions'

import LoginForm from '../../components/auth/LoginForm'

const LoginPage = function ({ history, login, isLoading, errors, user }) {
  const onSubmit = async (username, password) => {
    await login(username, password)
    history.push('/')
  }

  return (
    <div className="screen-center">
      <div className="login-form">
        <LoginForm
          isLoading={isLoading}
          errors={errors}
          onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  async login (username, password) {
    await dispatch(login(username, password))
  }
})

const mapStateToProps = state => ({
  isLoading: state.ui.isAuthLoading,
  errors: state.ui.authErrors
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)