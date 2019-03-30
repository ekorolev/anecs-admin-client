import React from 'react'

import { Nav } from 'react-bootstrap'

const PapersNav = function () {
  return (
    <Nav className="flex-column">
      <Nav.Link>Show all papers</Nav.Link>
      <Nav.Link>Create a paper</Nav.Link>
    </Nav>
  )
}

export default PapersNav