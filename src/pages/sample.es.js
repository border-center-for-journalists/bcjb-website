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
    const metakeywords = data.metakeywords.text || ContextEs.texts.keywords
    const contentResume = data.content.text
      ? data.content.text.slice(0, 200)
      : false
    const metadescription =
      data.metadescription.text || contentResume || ContextEs.texts.description
    const title = data.title.text || ContextEs.texts.title
    const image = data.cover && data.cover.url ? data.cover.url : false
    return (
      <Context.Provider value={ContextEs}>
        <Layout langKey="es">
          <SEO
            lang="es"
            title={title}
            keywords={metakeywords}
            description={metadescription}
            image={image}
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
  query SampleEsPageQuery {
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
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }
  }
`

export default SampleEsPage
