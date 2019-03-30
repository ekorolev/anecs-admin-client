import React from 'react'
import { Card } from 'react-bootstrap'

const PaperItem = props => {
  return (
    <Card>
      <Card.Body>
        {props.data.title}
      </Card.Body>
    </Card>
  )
}

export default PaperItem