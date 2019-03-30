import React from 'react'
import TextTruncate from 'react-text-truncate'
import PropTypes from 'prop-types'

import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Row,
  Col,
  Spinner
} from 'react-bootstrap'

const AnecdotesItem = props => (
  <Card className="my-2">
    <Card.Body>
      <TextTruncate
        line={1}
        truncateText="..."
        text={props.data.text}/>
    </Card.Body>
    <Card.Footer>
      <Container>
        <Row>
          <Col className="text-left">
            { props.data.isLoading && (
                <Spinner
                  animation="border"
                  variant="info"
                  size="sm"/>
              )
            }          
          </Col>
          <Col className="text-right">
            <ButtonGroup>
              <Button
                onClick={() => props.onSelect(props.data._id)}
                variant="info"
                size="sm">
                Show
              </Button>
              <Button
                onClick={() => props.onDelete(props.data._id)}
                disabled={props.data.isLoading}
                variant="info"
                size="sm">
                Delete
              </Button>
            </ButtonGroup>          
          </Col>
        </Row>
      </Container>
    </Card.Footer>
  </Card>
)

AnecdotesItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
  }),
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default AnecdotesItem