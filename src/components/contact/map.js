import React, { Component } from "react"
import { Section, Container, Rows, Row } from "../../theme/index.styled"

class MapComponent extends Component {
  render() {
    const iframe = (
      <iframe
        title="Border Center Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6657785517!2d-86.82326208452868!3d21.16569508592426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2ea9f403f50b%3A0xa61af43635fae548!2sSpaceshipLabs!5e0!3m2!1ses!2smx!4v1559250374382!5m2!1ses!2smx"
        width="100%"
        height="300"
        frameborder="0"
        allowfullscreen
      />
    )
    return (
      <Section>
        <Container>
          <Rows>
            <Row width="45%">
              <p>{iframe}</p>
              <p>
                MZ-48 L-08 Oficina 2 1.N. Blvd. Kukulcan, Zona Hotelera, 77500,
                Cancún, Q. Roo.
              </p>
            </Row>
          </Rows>
        </Container>
      </Section>
    )
  }
}

export default MapComponent
