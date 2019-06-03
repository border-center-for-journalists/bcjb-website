import React, { Component } from "react"
import TallerComponent from "./taller"
import { Section, Container, Title3, Rows } from "../../theme/index.styled"
import img from "../../theme/images/damnificados.png"
const taller = {
  title: "Labore et dolore magna aliqua",
  excerpt: "Sectetur adipisicing elit, sed do eiusmod tempor incididunt...",
  date: new Date(),
  img: img,
}
const talleres = [taller, taller, taller]

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
