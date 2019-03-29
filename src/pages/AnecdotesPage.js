import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import AnecdotesNav from '../layouts/AnecdotesNav'
import AnecdoteList from '../components/anecdotes/AnecdoteList'
import PaginationBar from '../components/PaginationBar'
import {
  setPageIsLoading,
  setPageIsLoaded,
  setAnecdotes,
  setAnecdotesCount,
  setPageNumber
} from '../actions/AnecdotesActions'
import {
  getAnecdotes
} from '../api'

class AnecdotesPage extends React.Component {
  async componentWillMount () {
    if (!this.props.anecdotes.options.pageIsLoaded) {
      console.log('Gjitk yахуй')
      await this.onPageSelect(this.props.anecdotes.options.pageNumber)
      this.props.setPageIsLoaded(true)
    }
  }

  async onPageSelect (pageNumber) {
    this.props.setPageIsLoading(true)
    const response = await getAnecdotes(
      pageNumber,
      this.props.anecdotes.options.pageSize
    )
    this.props.setAnecdotes(response.anecdotes)
    this.props.setAnecdotesCount(response.count)
    this.props.setPageNumber(pageNumber)
    this.props.setPageIsLoading(false)
  }

  render () {
    return (
      <MainLayout sideNav={<AnecdotesNav/>}>
        { !this.props.anecdotes.options.pageIsLoading ?
          this.props.anecdotes.items.length > 0 ? (
            <div>
              <AnecdoteList anecdotes={this.props.anecdotes.items}/>
              <PaginationBar
                onPageSelect={this.onPageSelect.bind(this)}
                currentPageNumber={this.props.anecdotes.options.pageNumber}
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
  setPageIsLoading: b => dispatch(setPageIsLoading(b)),
  setPageIsLoaded: b => dispatch(setPageIsLoaded(b)),
  setPageNumber: n => dispatch(setPageNumber(n)),
  setAnecdotes: anecs => dispatch(setAnecdotes(anecs)),
  setAnecdotesCount: count => dispatch(setAnecdotesCount(count))
}))(AnecdotesPage)
