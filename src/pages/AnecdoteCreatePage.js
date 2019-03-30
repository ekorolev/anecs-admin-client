import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import AnecdotesNav from '../layouts/AnecdotesNav'
import AnecdoteForm from '../components/anecdotes/AnecdoteForm'
import { createAnecdote } from '../actions/AnecdotesActions'

class AnecdoteCreate extends React.Component {
  async onCreate (data) {
    await this.props.createAnecdote(data)
    this.props.history.push('/anecdotes')
  }
  render () {
    return (
      <MainLayout sideNav={<AnecdotesNav/>}>
        <AnecdoteForm onSubmit={this.onCreate.bind(this)}/>
      </MainLayout>
    )
  }
}

export default connect(null, dispatch => ({
  createAnecdote: async data => dispatch(createAnecdote(data))
}))(AnecdoteCreate)