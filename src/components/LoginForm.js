import React from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  Button
} from 'react-bootstrap'

class LoginForm extends React.Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  onFieldChanged (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Sign in</h1>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm