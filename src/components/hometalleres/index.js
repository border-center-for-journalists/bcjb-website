import React, { Component } from "react"
import TallerComponent from "./taller"
import { Section, Container, Title3, Rows } from "../../theme/index.styled"
import { Context } from "../../languages/context"

class TalleresComponent extends Component {
  render() {
    const talleresItems = this.props.data.edges.map(t => (
      <TallerComponent lang={this.props.lang} data={t} />
    ))
    return (
      <Context.Consumer>
        {({ texts }) => {
          return (
            <Section>
              <Container>
                <Title3 color="yellow">{texts.workshops}</Title3>
                <Rows wrap>{talleresItems}</Rows>
              </Container>
            </Section>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default TalleresComponent
