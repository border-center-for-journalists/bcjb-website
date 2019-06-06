import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"
import {
  Section,
  Container,
  Subtitle,
  Rows,
  HtmlContent,
} from "../theme/index.styled"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import Layout from "../components/layout"
import "moment/locale/es"
import moment from "moment"
import img from "../theme/images/about.png"

moment.locale("es")

class SamplePage extends Component {
  render() {
    const data = this.props.data.prismicLandingPages.data
    return (
      <ThemeProvider theme={Theme}>
        <Layout>
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
      </ThemeProvider>
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
