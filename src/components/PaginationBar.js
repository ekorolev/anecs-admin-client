import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'react-bootstrap'

class PaginationBar extends React.Component {
  handlePageSelect(i) {
    return (event) => this.props.onPageSelect(i)
  }
  render() {
    const items = []
    const pageAmount = Math.ceil(this.props.itemsAmount / this.props.pageSize)
    for (let i = 0; i < pageAmount; ++i) {
      items.push(
        <Pagination.Item
          key={i}
          onClick={this.handlePageSelect(i)}
          active={this.props.currentPageNumber === i}>
          {i}
        </Pagination.Item>
      )
    }
    return (
      <Pagination>{items}</Pagination>
    )
  }
}

PaginationBar.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  itemsAmount: PropTypes.number.isRequired,
  onPageSelect: PropTypes.func.isRequired
}

export default PaginationBar