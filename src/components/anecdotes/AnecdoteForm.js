import React from 'react'
import PropTypes from 'prop-types'
import {
  Form, Button, Spinner
} from 'react-bootstrap'

class AnecdoteForm extends React.Component {
  constructor () {
    super()

    this.state = {
      author: 'admin',
      status: 'FOR_PUBLICATION',
      text: '',
      loading: false
    }
  }
  onFieldChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  async onSubmit(evt) {
    this.setState({ loading: true })
    evt.preventDefault()
    const data = { ...this.state }
    delete data.loading
    await this.props.onSubmit(this.state)
  }
  render () {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Form.Group>
          <Form.Label htmlFor="authorAnec">Author</Form.Label>
          <Form.Control
            name="author"
            value={this.state.author}
            onChange={this.onFieldChange.bind(this)}
            as="input"
            id="authorAnec"/>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="statusAnec">Status</Form.Label>
          <Form.Control
            as="select"
            value={this.state.status}
            name="status"
            onChange={this.onFieldChange.bind(this)}
            id="statusAnec">
            <Form.Control as="option" value="FOR_PUBLICATION">FOR_PUBLICATION</Form.Control>  
            <Form.Control as="option" value="PUBLISHED">PUBLISHED</Form.Control>  
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="textAnec">Text</Form.Label>
          <Form.Control
            as="textarea"
            value={this.state.text}
            name="text"
            rows="5"
            onChange={this.onFieldChange.bind(this)}
            id="textAnec"/>
        </Form.Group>
        <Form.Group>
          <Button disabled={this.state.loading} type="submit">Create</Button> 
          { this.state.loading && (<Spinner className="mx-2" animation="border" variant="primary" size="sm"/>)}
        </Form.Group>
      </Form>
    )
  }
}

AnecdoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AnecdoteForm