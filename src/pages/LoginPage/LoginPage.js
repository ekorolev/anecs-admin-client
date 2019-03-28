import React from 'react'
import './loginPage.scss'

import LoginForm from '../../components/LoginForm'

const LoginPage = function ({ history }) {

  const onSubmit = (event) => {
    event.preventDefault()
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

export default LoginPage