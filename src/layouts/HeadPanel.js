import React from 'react'
import { connect } from 'react-redux'

import UserThumb from '../components/UserThumb'

import {
  Navbar,
  Nav
} from 'react-bootstrap'

const HeadPanel = function(props) {
 return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#/">anek.xyz</Navbar.Brand>
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="#/anecdotes">Anecdotes</Nav.Link>
        <Nav.Link href="#/pages">Pages</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <UserThumb
          isAuthenticated={props.isAuthenticated}
          user={props.user}/>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
 )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(HeadPanel)