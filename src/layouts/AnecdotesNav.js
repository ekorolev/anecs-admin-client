import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const AnecdotesNav = function() {
  return (
    <Nav className="flex-column">
      <Link to="/anecdotes/">Show all anecdotes</Link>
      <Link to="/anecdotes/create">Create an anecdote</Link>
    </Nav>
  )
}

export default AnecdotesNav