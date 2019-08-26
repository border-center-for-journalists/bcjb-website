import React, { Component } from "react"
import { PageWrapper, PageNumber } from "./index.styled"

class PaginationComponent extends Component {
  render() {
    const { totalPages, currentPage, lang, section } = this.props
    const items = []
    if (totalPages > 1) {
      Array.from({ length: totalPages }).forEach((_, i) => {
        const url =
          i + 1 === currentPage
            ? ""
            : `/${lang}/${section}${i + 1 === 1 ? "" : "/" + (i + 1)}`
        let item
        if (i + 1 === currentPage)
          item = <PageNumber className="current">{i + 1}</PageNumber>
        else item = <PageNumber href={url}>{i + 1}</PageNumber>
        items.push(item)
      })
    }
    return <PageWrapper>{items}</PageWrapper>
  }
}

export default PaginationComponent
