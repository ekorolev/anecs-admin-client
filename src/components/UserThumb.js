import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class UserThumb extends React.Component {
  render() {
    if (this.props.isAuthenticated) {
      return (
        <span>Signed in as {this.props.user.username}</span>
      )
    } else {
      return <span><Link to="/login">Login</Link> or <Link to="/register">register</Link></span>
    }
  }
}

UserThumb.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
}

export default UserThumb
