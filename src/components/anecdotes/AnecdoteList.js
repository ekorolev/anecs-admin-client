import React from 'react'

import AnecdoteItem from './AnecdoteItem'

class AnecdoteList extends React.Component {
  render () {
    const visibleAnecdotes = this.props.anecdotes.map(
      anec => <AnecdoteItem key={anec._id} data={anec}/>
    )

    return (
      <div>
        {visibleAnecdotes}
      </div>
    )
  }
}

export default AnecdoteList