import React, { Component } from "react"
import NoticiaComponent from "./noticia"
import { Section, Container, Title3, Rows } from "../../theme/index.styled"
import { Context } from "../../languages/context"

class NewsComponent extends Component {
  render() {
    console.log('NEWS', newsItems)
    const newsItems = this.props.data.edges.map(t => (
      <NoticiaComponent data={t} />
    ))
    return (
      <Context.Consumer>
        {({ texts }) => {
          return (
            <Section>
              <Container>
                <Title3 color="yellow">{texts.recentNews}</Title3>
                <Rows wrap>{newsItems}</Rows>
              </Container>
            </Section>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default NewsComponent
