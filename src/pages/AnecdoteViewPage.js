import React from 'react'
import MainLayout from '../layouts/MainLayout'
import AnecdotesNav from '../layouts/AnecdotesNav'
import AnecdoteCard from '../components/anecdotes/AnecdoteCard'
import { connect } from 'react-redux'

import {
  removeAnecdote,
  saveAnecdote
} from '../actions/AnecdotesActions'

class AnecdoteView extends React.Component {
  async onDelete (id) {
    await this.props.removeAnecdote(id)
    this.props.history.push('/anecdotes')
  }
  render () {
    const anecdote = this.props.anecdotes.find(anec => anec._id === this.props.match.params.id)
    return (
      <MainLayout sideNav={<AnecdotesNav/>}>
        { anecdote && (
            <AnecdoteCard
              onSave={this.props.saveAnecdote}
              onDelete={this.onDelete.bind(this)}
              data={anecdote} />
          )
        }
        { !anecdote && (<p>Anecdote isn't found</p>)}
      </MainLayout>
    )
  }
}

export default connect(state => ({
  anecdotes: state.anecdotes.anecdotes
}), dispatch => ({
  removeAnecdote: async id => dispatch(removeAnecdote(id)),
  saveAnecdote: async (id, update) => dispatch(saveAnecdote(id, update))
}))(AnecdoteView)