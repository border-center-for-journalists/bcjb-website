import React, { Component } from "react"
import {
  Section,
  Container,
  Title2,
  Subtitle,
  Paragraph,
  ImageWrapper,
} from "../../theme/index.styled"
import img from "../../theme/images/about.png"

class AboutComponent extends Component {
  render() {
    return (
      <Section>
        <Container size="medium">
          <Title2>¿Quiénes somos?</Title2>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur</Subtitle>
          <Paragraph>
            Labore et dolore magna aliqua. Ut enim ad minim veniam rud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo.
          </Paragraph>
        </Container>
        <Container>
          <ImageWrapper>
            <img alt="About Border Center" src={img} />
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </ImageWrapper>
        </Container>
      </Section>
    )
  }
}

export default AboutComponent
