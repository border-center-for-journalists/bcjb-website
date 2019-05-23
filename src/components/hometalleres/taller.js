import React, { Component } from "react"
import { TallerItem, TallerTexts, TallerImage } from "./index.styled"
import { Paragraph } from "../../theme/index.styled"

class TallerComponent extends Component {
  render() {
    const { title, img, excerpt, date } = this.props.values
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    const options2 = { timeZoneName: "short" }
    return (
      <TallerItem>
        <TallerTexts>
          <h3>{title}</h3>
          <Paragraph>{excerpt}</Paragraph>
        </TallerTexts>
        <TallerImage>
          <img alt={title} src={img} />
          <div>
            <i class="icon-calendario" />
            <span>{date.toLocaleDateString("en-US", options)}</span>
            <span>
              <b>{date.toLocaleTimeString("en-US", options2)}</b>
            </span>
          </div>
        </TallerImage>
      </TallerItem>
    )
  }
}

export default TallerComponent
