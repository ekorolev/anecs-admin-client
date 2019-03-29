import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import AnecdotesNav from '../layouts/AnecdotesNav'
import AnecdoteList from '../components/anecdotes/AnecdoteList'
import PaginationBar from '../components/PaginationBar'
import { loadAnecdotes } from '../actions/AnecdotesActions'

class AnecdotesPage extends React.Component {
  async componentWillMount () {
    if (!this.props.anecdotes.options.pageIsLoaded) {
      await this.props.loadAnecdotes()
    }
  }
  onPageSelect (page) {
    this.props.history.push(`/anecdotes/${page}`)
  }
  render () {
    const page = parseInt(this.props.match.params.page || 0)
    const visibleAnecdotes = this.props.anecdotes.items.slice(
      page * this.props.anecdotes.options.pageSize,
      (page + 1) * this.props.anecdotes.options.pageSize
    )
    return (
      <MainLayout sideNav={<AnecdotesNav/>}>
        { !this.props.anecdotes.options.pageIsLoading ?
          visibleAnecdotes.length > 0 ? (
            <div>
              <AnecdoteList anecdotes={visibleAnecdotes}/>
              <PaginationBar
                onPageSelect={this.onPageSelect.bind(this)}
                currentPageNumber={parseInt(this.props.match.params.page || 0)}
                itemsAmount={this.props.anecdotes.options.count}
                pageSize={this.props.anecdotes.options.pageSize}/>
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
  anecdotes: state.anecdotes
}), dispatch => ({
  loadAnecdotes: async () => dispatch(loadAnecdotes())
}))(AnecdotesPage)
