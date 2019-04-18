import React from 'react'
import { connect } from 'react-redux'
import './registerPage.scss'
import { register } from '../../actions/AuthActions'

import RegisterForm from '../../components/auth/RegisterForm'

const RegisterPage = function ({ register, history }) {

  const onSubmit = async (username, password) => {
    await register(username, password)
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

const mapDispatchToProps = dispatch => ({
  async register (username, password) {
    await dispatch(register(username, password))
  }
})

export default connect(null, mapDispatchToProps)(RegisterPage)