import React from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  Button
} from 'react-bootstrap'

class RegisterForm extends React.Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: '',
      password_confirm: ''
    }
  }

  onFieldChanged (event) {
    this.setState({
      [event.name]: event.value
    })
  }

  render () {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <h1>Register</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="username"
            value={this.state.username}
            onChange={this.onFieldChanged.bind(this)}
            placeholder="Username"/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onFieldChanged.bind(this)}
            placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Control
            type="password"
            name="password_confirm"
            value={this.state.password_confirm}
            onChange={this.onFieldChanged.bind(this)}
            placeholder="Confirm password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default RegisterForm