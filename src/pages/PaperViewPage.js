import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import PapersNav from '../layouts/PapersNav'
import PaperCard from '../components/papers/PaperCard'
import PapersActions from '../actions/PapersActions'

class PaperView extends React.Component {
  async onDelete (id) {
    await this.props.deletePaper(id)
    this.props.history.push('/papers')
  }
  render () {
    const paper = this.props.papers.find(p => p._id === this.props.match.params.id)
    if (!paper) return <p>Page not found</p>
    return (
      <MainLayout sideNav={<PapersNav/>}>
        <PaperCard
          onUpdate={(id) => this.props.history.push(`/papers/update/${id}`)}
          onDelete={this.onDelete.bind(this)}
          data={paper}/>
      </MainLayout>
    )
  }
}

export default connect(state => ({
  papers: state.papers.items
}), dispatch => ({
  deletePaper: (id) => dispatch(PapersActions.removePaper(id))
}))(PaperView)