import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Navbar,
  Container,
  Row,
  Col
} from 'react-bootstrap'

class MainLayout extends Component {
  constructor() {
    super()
    console.log(this.props.sideNav)
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#/">anek.xyz</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col xl={2} md={3}>
              {this.props.sideNav}
            </Col>
            <Col xl={10} md={9}>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

MainLayout.propTypes = {
  sideNav: PropTypes.func.isRequired
}

export default MainLayout