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
    const { title, subtitle, excerpt, cover } = this.props.data
    return (
      <Section>
        <Container size="medium">
          <Title2>{title.text}</Title2>
          <Subtitle>{subtitle.text}</Subtitle>
          <Paragraph>{excerpt.text}</Paragraph>
        </Container>
        <Container>
          <ImageWrapper>
            <img alt={title.text} src={cover.url} />
            {/*<p>Lorem ipsum dolor sit amet, consectetur</p>*/}
          </ImageWrapper>
        </Container>
      </Section>
    )
  }
}

export default AboutComponent
