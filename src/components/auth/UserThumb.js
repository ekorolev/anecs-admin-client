import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class UserThumb extends React.Component {
  render() {
    const LogoutLink = <button className="btn btn-info btn-sm" onClick={this.props.onLogout}>Logout</button>
    if (this.props.isLoggedIn) {
      return (
        <span>Signed in as {this.props.user.username} {LogoutLink}</span>
      )
    } else {
      return <span><Link to="/login">Login</Link> or <Link to="/register">register</Link></span>
    }
  }
}

UserThumb.propTypes = {
  isLoggedIn: PropTypes.bool,
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired
}

export default UserThumb
