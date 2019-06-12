import React, { Component } from "react"
import { PageWrapper, PageNumber } from "./index.styled"

class PaginationComponent extends Component {
  render() {
    const { totalPages, currentPage } = this.props
    const items = []
    Array.from({ length: totalPages }).forEach((_, i) => {
      const item = (
        <PageNumber className={i + 1 === currentPage ? "current" : ""}>
          {i + 1}
        </PageNumber>
      )
      items.push(item)
    })
    return <PageWrapper>{items}</PageWrapper>
  }
}

export default PaginationComponent
