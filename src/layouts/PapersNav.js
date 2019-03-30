import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PapersNav = function () {
  return (
    <Nav className="flex-column">
      <Link to="/papers">Show all papers</Link>
      <Link to="/papers/create">Create a paper</Link>
    </Nav>
  )
}

export default PapersNav