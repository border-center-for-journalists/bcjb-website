import React, { Component } from "react"
import { UneteSection, Title, Subtitle, Paragraph } from "./index.styled"

class UneteComponent extends Component {
  render() {
    return (
      <UneteSection>
        <Title>Únete</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
        </Subtitle>
        <Paragraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in.
        </Paragraph>
      </UneteSection>
    )
  }
}

export default UneteComponent
