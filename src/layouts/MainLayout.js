import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

import HeadPanel from './HeadPanel'

const MainLayout = function(props) {
  return (
    <div>
      <HeadPanel />
      <Container fluid>
        <Row>
          <Col xl={2} md={3}>
            <Container>
              {props.sideNav}
            </Container>
          </Col>
          <Col xl={10} md={9}>
            <Container>
              {props.children}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

MainLayout.propTypes = {
  sideNav: PropTypes.object.isRequired
}

export default MainLayout