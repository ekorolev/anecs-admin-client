import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Button,
  Col,
  Row,
  Container,
  Spinner,
  ButtonGroup,
  Form
} from 'react-bootstrap'

class AnecdoteCard extends React.Component {
  constructor () {
    super()

    this.state = {
      anyUpdates: false,
      update: false,
      text: null
    }
  }
  componentDidMount () {
    this.setState({
      text: this.props.data.text
    })
  }
  onFieldChange (evt) {
    this.setState({
      anyUpdates: true,
      [evt.target.name]: evt.target.value
    })
  }
  updateObject () {
    return {
      text: this.state.text
    }
  }
  async saveAnecdote () {
    await this.props.onSave(this.props.data._id, this.updateObject())
    this.setState({
      update: false,
      anyUpdates: false
    })
  }
  render () {
    return (
      <Card>
        <Card.Header>
          <Card.Text>
            Anecdote {this.props.data._id}
          </Card.Text>
        </Card.Header>
        <Card.Body>
          { !this.state.update && 
            (<div onDoubleClick={() => this.setState({ update: true })}>{this.props.data.text}</div>) 
          }
          { this.state.update && 
            (<Form.Control 
              name="text" 
              as="textarea" 
              rows="15" 
              value={this.state.text} 
              onChange={this.onFieldChange.bind(this)}/>) 
          }
        </Card.Body>
        <Card.Footer>
          <Container>
            <Row>
              <Col className="text-left">
                { this.props.data.isLoading && (
                    <Spinner
                      animation="border"
                      variant="info"
                      size="sm"/>
                  )
                }          
              </Col>
              <Col className="text-right">
                <ButtonGroup>
                  { this.state.anyUpdates && 
                    <Button
                      onClick={this.saveAnecdote.bind(this)}
                      disabled={this.props.data.isLoading}
                      variant="info"
                      size="sm">
                      Save  
                    </Button>
                  }
                  <Button
                    onClick={() => this.props.onDelete(this.props.data._id)}
                    disabled={this.props.data.isLoading}
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
  }
}

AnecdoteCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default AnecdoteCard