import React, { Component } from "react"
import {
  Section,
  Container,
  HtmlContent,
} from "../../theme/index.styled"

class TermsAndConditionsComponent extends Component {
  render() {
    return (
      <Section>
        <Container size="medium">
          <HtmlContent
            dangerouslySetInnerHTML={{
              __html: this.props.data.content.html,
            }}
          />
        </Container>
      </Section>
    )
  }
}

export default TermsAndConditionsComponent
