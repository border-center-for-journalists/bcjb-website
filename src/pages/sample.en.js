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

import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import { Context, TextsEn } from "../languages/context"

addLocaleData(en)

const localContext = {
  lang: "en",
  texts: TextsEn,
}

moment.locale("es")

class SamplePage extends Component {
  render() {
    const data = this.props.data.prismicLandingPages.data
    return (
      <Context.Provider value={localContext}>
        <Layout langKey="en">
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
  query SamplePageQuery {
    prismicLandingPages(uid: { eq: "samplepage" }) {
      uid
      data {
        title {
          text
        }
        subtitle {
          text
        }
        content {
          html
        }
        excerpt {
          html
          text
        }
        cover {
          url
        }
      }
    }
  }
`

export default SamplePage
