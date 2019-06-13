import React, { Component } from "react"
import { graphql } from "gatsby"
import {
  Section,
  Container,
  Subtitle,
  HtmlContent,
} from "../theme/index.styled"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import Layout from "../components/layout"
import "moment/locale/es"
import moment from "moment"

import { Context, ContextEs } from "../languages/context"

moment.locale("es")

class SampleEsPage extends Component {
  render() {
    const data = this.props.data.prismicLandingPages.data
    return (
      <Context.Provider value={ContextEs}>
        <Layout langKey="es">
          <SEO title={data.title.text} keywords={[`Border Center`]} />

          <BannerComponent
            data={{
              cover: data.cover,
              title: data.title,
            }}
            fullHeight={false}
          />
          <Section>
            <Container>
              <Subtitle>{data.subtitle.text}</Subtitle>
              <HtmlContent
                dangerouslySetInnerHTML={{ __html: data.content.html }}
              />
            </Container>
          </Section>
        </Layout>
      </Context.Provider>
    )
  }
}

export const pageQuery = graphql`
  query AboutUsPageQuery {
    prismicLandingPages(uid: { eq: "quienes-somos" }, lang: { eq: "en-us" }) {
      ...landingPageCompleteDataFragment
    }
  }
`

export default SampleEsPage
