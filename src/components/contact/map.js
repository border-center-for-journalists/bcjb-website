import React, { Component } from "react"
import { Section, Container, Rows, Row } from "../../theme/index.styled"

class MapComponent extends Component {
  render() {
    const iframe = (
      <iframe
        title="Border Center Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14307.175486256709!2d-98.1716729!3d26.3007815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a2379d67b227%3A0x21a58f8c5436fe1b!2s506%20W%20University%20Dr%2C%20Edinburg%2C%20TX%2078539%2C%20USA!5e0!3m2!1sen!2smx!4v1579544811008!5m2!1sen!2smx"
        width="100%"
        height="300"
        frameborder="0"
        allowfullscreen
      />
    )
    const { address } = this.props;
    return (
      <Section>
        <Container>
          <Rows>
            <Row width="45%">
              <p>{iframe}</p>
              <p>
                {address}
              </p>
            </Row>
          </Rows>
        </Container>
      </Section>
    )
  }
}

export default MapComponent
