import React from 'react'
import { connect } from 'react-redux'

import UserThumb from '../components/auth/UserThumb'
import {
  logout
} from '../actions/AuthActions'

import {
  Navbar,
  Nav
} from 'react-bootstrap'

const HeadPanel = function(props) {
  const onLogout = () => props.logout(props.accessToken)
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#/">anek.xyz</Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="#/anecdotes">Anecdotes</Nav.Link>
          <Nav.Link href="#/papers">Papers</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <UserThumb
            onLogout={onLogout}
            isLoggedIn={props.user.isLoggedIn}
            user={props.user}/>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    accessToken: state.auth.credentials.accessToken
  }
}

const mapDispatchToProps = dispatch => ({
  async logout (accessToken) {
    await dispatch(logout(accessToken))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeadPanel)