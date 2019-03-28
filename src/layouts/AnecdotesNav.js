import React from 'react'

import { Nav } from 'react-bootstrap'

const AnecdotesNav = function() {
  return (
    <Nav className="flex-column">
      <Nav.Link>Show all anecdotes</Nav.Link>
      <Nav.Link>Create an anecdote</Nav.Link>
    </Nav>
  )
}

export default AnecdotesNav