import React from 'react'

import { Nav } from 'react-bootstrap'

const PagesNav = function () {
  return (
    <Nav className="flex-column">
      <Nav.Link>Show all pages</Nav.Link>
      <Nav.Link>Create a page</Nav.Link>
    </Nav>
  )
}

export default PagesNav