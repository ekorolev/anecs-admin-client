import React from 'react'
import './registerPage.scss'

import RegisterForm from '../../components/auth/RegisterForm'

const RegisterPage = function ({ history }) {

  const onSubmit = (event) => {
    event.preventDefault()
    history.push('/')
  }

  return (
    <div className="screen-center">
      <div className="login-form">
        <RegisterForm
          onSubmit={onSubmit}/>
      </div>
    </div>
  )
}

export default RegisterPage