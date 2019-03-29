import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import AnecdotesNav from '../layouts/AnecdotesNav'
import AnecdoteList from '../components/anecdotes/AnecdoteList'
import PaginationBar from '../components/PaginationBar'
import { loadAnecdotes } from '../actions/AnecdotesActions'

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
  render () {
    const page = parseInt(this.props.match.params.page || 0)
    const visibleAnecdotes = this.props.anecdotes.slice(
      page * this.state.pageSize,
      (page + 1) * this.state.pageSize
    )
    return (
      <MainLayout sideNav={<AnecdotesNav/>}>
        { !this.props.isLoading ?
          visibleAnecdotes.length > 0 ? (
            <div>
              <AnecdoteList anecdotes={visibleAnecdotes}/>
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
  loadAnecdotes: async () => dispatch(loadAnecdotes())
}))(AnecdotesPage)
