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

import { Context, ContextEn } from "../languages/context"

moment.locale("en")

class SampleEsPage extends Component {
  render() {
    const data = this.props.data.prismicLandingPages.data
    const metakeywords = data.metakeywords.text || ContextEn.texts.keywords
    const contentResume = data.content.text
      ? data.content.text.slice(0, 200)
      : false
    const metadescription =
      data.metadescription.text || contentResume || ContextEn.texts.description
    const title = data.title.text || ContextEn.texts.title
    return (
      <Context.Provider value={ContextEn}>
        <Layout langKey="en">
          <SEO
            lang="en"
            title={title}
            keywords={metakeywords}
            description={metadescription}
          />

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
