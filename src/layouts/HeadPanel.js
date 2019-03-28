import React from 'react'
import {
  Navbar,
  Nav
} from 'react-bootstrap'

const HeadPanel = function() {
 return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#/">anek.xyz</Navbar.Brand>
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="#/anecdotes">Anecdotes</Nav.Link>
        <Nav.Link href="#/pages">Pages</Nav.Link>
        <Nav.Link href="#/login">Login</Nav.Link>
        <Nav.Link href="#/register">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
 )
}

export default HeadPanel