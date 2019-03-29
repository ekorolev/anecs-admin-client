import React from 'react'
import { Card } from 'react-bootstrap'
import TextTruncate from 'react-text-truncate'

const AnecdotesItem = props => (
  <Card className="my-2">
    <Card.Body>
      <TextTruncate
        line={1}
        truncateText="..."
        text={props.data.text}/>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
)

export default AnecdotesItem