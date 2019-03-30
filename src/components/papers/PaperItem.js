import React from 'react'
import PropTypes from 'prop-types'
import { Card, ButtonGroup, Button, Row, Col, Container, Spinner } from 'react-bootstrap'

const PaperItem = props => {
  return (
    <Card className="my-2">
      <Card.Body>
        {props.data.title}
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row>
            <Col className="text-left">
              { props.data.isLoading && (
                <Spinner
                  variant="info"
                  size="sm"
                  animation="border"/>
              )}
            </Col>
            <Col className="text-right">
              <ButtonGroup>
                <Button
                  onClick={() => props.onSelect(props.data._id)}
                  size="sm"
                  variant="info">
                  Show  
                </Button>
                <Button
                  disabled={props.data.isLoading}
                  onClick={() => props.onDelete(props.data._id)}
                  size="sm"
                  variant="info">
                  Delete  
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  )
}

PaperItem.propTypes = {
  data: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default PaperItem