import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Card, Col, Row, Container, ButtonGroup, Button, Spinner } from 'react-bootstrap'

class PaperCard extends React.Component {
  render () {
    return (
      <Card className="my-2">
        <Card.Header>
          <Card.Text>{this.props.data.title}</Card.Text>
        </Card.Header>
        <Card.Body>
          <ReactMarkdown source={this.props.data.text} />
        </Card.Body>
        <Card.Footer>
          <Container>
            <Row>
              <Col className="text-left">
                { this.props.data.isLoading && (
                  <Spinner
                    animation="border"
                    size="sm"
                    variant="info"/>
                )}
              </Col>
              <Col className="text-right">
                <ButtonGroup>
                  <Button
                    variant="info"
                    size="sm"
                    onClick={() => this.props.onDelete(this.props.data._id)}
                    disabled={this.props.data.isLoading}>
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
}

export default PaperCard