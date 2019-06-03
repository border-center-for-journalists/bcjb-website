import React, { Component } from "react"
import { TallerItem, TallerTexts, TallerImage } from "./index.styled"
import { Paragraph } from "../../theme/index.styled"

class TallerComponent extends Component {
  render() {
    const url = this.props.data.node.uid
    const { title, cover, excerpt, time } = this.props.data.node.data
    const formatDate = time.split(",")
    return (
      <TallerItem>
        <TallerTexts>
          <h3>{title.text}</h3>
          <Paragraph>{excerpt.text}</Paragraph>
        </TallerTexts>
        <TallerImage>
          <img alt={title.text} src={cover.small.url} />
          <div>
            <i class="icon-calendario" />
            <span>{formatDate[0]}</span>
            <span>
              <b>{formatDate[1]}</b>
            </span>
          </div>
        </TallerImage>
      </TallerItem>
    )
  }
}

export default TallerComponent
