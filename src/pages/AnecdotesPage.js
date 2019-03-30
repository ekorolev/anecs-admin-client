import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import AnecdotesNav from '../layouts/AnecdotesNav'
import PaginationBar from '../components/PaginationBar'
import AnecdotesItem from '../components/anecdotes/AnecdoteItem'
import { loadAnecdotes, removeAnecdote } from '../actions/AnecdotesActions'

class AnecdotesPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pageSize: 10
    }
  }
  async componentWillMount () {
    if (this.props.anecdotes.length === 0) {
      await this.props.loadAnecdotes()
    }
  }
  onPageSelect (page) {
    this.props.history.push(`/anecdotes/${page}`)
  }
  onSelectAnecdote (id) {
    this.props.history.push(`/anecdotes/show/${id}`)
  }
  render () {
    const page = parseInt(this.props.match.params.page || 0)
    const visibleAnecdotes = this.props.anecdotes
    .slice(
      page * this.state.pageSize,
      (page + 1) * this.state.pageSize
    )
    .map(anec =>
      <AnecdotesItem
        key={anec._id}
        onSelect={this.onSelectAnecdote.bind(this)}
        onDelete={this.props.removeAnecdote}
        data={anec}/>
    )
    
    return (
      <MainLayout sideNav={<AnecdotesNav/>}>
        { !this.props.isLoading ?
          visibleAnecdotes.length > 0 ? (
            <div>
              {visibleAnecdotes}
              <PaginationBar
                onPageSelect={this.onPageSelect.bind(this)}
                currentPageNumber={parseInt(this.props.match.params.page || 0)}
                itemsAmount={this.props.count}
                pageSize={this.state.pageSize}/>
            </div>
          ) : (
            <p>There aren't anecdotes</p>
          )
        : (
          <p>Loading...</p>
        )}
      </MainLayout>
    )
  }
}

export default connect(state => ({
  anecdotes: state.anecdotes.anecdotes,
  count: state.anecdotes.count,
  isLoading: state.anecdotes.isLoading
}), dispatch => ({
  loadAnecdotes: async () => dispatch(loadAnecdotes()),
  removeAnecdote: async (id) => dispatch(removeAnecdote(id))
}))(AnecdotesPage)
