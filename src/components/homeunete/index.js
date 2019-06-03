import React, { Component } from "react"
import { UneteSection, Title, Subtitle, Paragraph } from "./index.styled"

class UneteComponent extends Component {
  render() {
    const { cover, excerpt, title, subtitle } = this.props.data
    return (
      <UneteSection bg={cover.url}>
        <Title>{title.text}</Title>
        <Subtitle>{subtitle.text}</Subtitle>
        <Paragraph>{excerpt.text}</Paragraph>
      </UneteSection>
    )
  }
}

export default UneteComponent
