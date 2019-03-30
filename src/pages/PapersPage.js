import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import PapersNav from '../layouts/PapersNav'
import PapersActions from '../actions/PapersActions'
import PaperItem from '../components/papers/PaperItem'
import PaginationBar from '../components/PaginationBar'

class PapersPage extends React.Component {
  constructor () {
    super()

    this.state = {
      pageSize: 10
    }
  }
  componentDidMount () {
    if (this.props.papers.length === 0) {
      this.props.loadPapers()
    }
  }
  render () {
    const page = parseInt(this.props.match.params.page) || 0
    const visiblePapers = this.props.papers
    .slice(
      page * this.state.pageSize,
      (page + 1) * this.state.pageSize
    )
    .map(paper => <PaperItem
      onSelect={(id) => this.props.history.push(`/papers/show/${id}`)}
      onDelete={this.props.deletePaper}
      key={paper._id} 
      data={paper}/>
    )

    return (
      <MainLayout sideNav={<PapersNav/>}>
        {visiblePapers}
        <PaginationBar
          currentPageNumber={page}
          pageSize={this.state.pageSize}
          itemsAmount={this.props.papers.length}
          onPageSelect={p => this.props.history.push(`/papers/${p}`)}/>
      </MainLayout>
    )
  }
}

export default connect(state => ({
  papers: state.papers.items
}), dispatch => ({
  loadPapers: () => dispatch(PapersActions.loadPapers()),
  deletePaper: id => dispatch(PapersActions.removePaper(id))
}))(PapersPage)