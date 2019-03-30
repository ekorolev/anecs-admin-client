import React from 'react'
import { connect } from 'react-redux'
import MainLayout from '../layouts/MainLayout'
import PapersNav from '../layouts/PapersNav'
import PaperForm from '../components/papers/PaperForm'
import PapersActions from '../actions/PapersActions'

class PapersUpdatePage extends React.Component {
  render () {
    const paper = this.props.papers.find(p => p._id === this.props.match.params.id)
    if (!paper) return <p>Paper isn't found</p>
    return (
      <MainLayout sideNav={<PapersNav/>}>
        <PaperForm 
          onSubmit={this.props.updatePaper}
          data={paper} />
      </MainLayout>
    )
  }
}

export default connect(state => ({
  papers: state.papers.items
}), dispatch => ({
  updatePaper: (id, update) => dispatch(PapersActions.savePaper(id, update))
}))(PapersUpdatePage)