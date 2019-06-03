import React, { Component } from "react"
import TallerComponent from "./taller"
import { Section, Container, Title3, Rows } from "../../theme/index.styled"

class TalleresComponent extends Component {
  render() {
    const talleresItems = this.props.data.edges.map(t => (
      <TallerComponent data={t} />
    ))
    return (
      <Section>
        <Container>
          <Title3 color="yellow">Talleres</Title3>
          <Rows wrap>{talleresItems}</Rows>
        </Container>
      </Section>
    )
  }
}

export default TalleresComponent
