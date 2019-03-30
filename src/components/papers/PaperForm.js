import React from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'

class PaperForm extends React.Component {
  constructor (props) {
    super()

    this.state = {}
    if (props.data) {
      this.state = {...props.data}
    }
    this.state.anyChanges = false
    this.state.loading = false
  }
  handleFieldChange (evt) {
    this.setState({
      anyChanges: true,
      [evt.target.name]: evt.target.value
    })
  }
  async onSubmit (evt) {
    evt.preventDefault()
    if (!this.state.anyChanges) return
    this.setState({ loading: true })
    await this.props.onSubmit(this.state._id, this.state)
    this.setState({ loading: false, anyChanges: false })
  }
  render () {
    return (
      <Form onSubmit={this.onSubmit.bind(this)} className="my-2">
        <Form.Group>
          <Form.Control
            value={this.state.title}
            name="title"
            onChange={this.handleFieldChange.bind(this)}
            placeholder="Title"
            as="input"/>
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={this.state.text}
            name="text"
            onChange={this.handleFieldChange.bind(this)}
            placeholder="Text of paper"
            as="textarea"
            rows="18"/>
        </Form.Group>
        <Button
          disabled={this.state.loading || !this.state.anyChanges}
          type="submit">
          Save  
        </Button> 
        { this.state.loading && (
          <Spinner
            className="mx-2"
            animation="border"
            size="sm"
            variant="info"/>
        )}
      </Form>
    )
  }
}

export default PaperForm