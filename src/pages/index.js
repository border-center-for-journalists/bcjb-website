import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import AboutComponent from "../components/homeabout/index"
import TalleresComponent from "../components/hometalleres/index"
import ContactComponent from "../components/contact/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const IndexPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  const talleres = data.allPrismicEvent
  console.log("talleres", talleres)
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Inicio" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["home-page"]} menu />
        <AboutComponent data={landingPages["quienes-somos"]} />
        <TalleresComponent data={talleres} />
        <ContactComponent />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    allPrismicLandingPages(limit: 20, filter: { tags: { in: ["homepage"] } }) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            subtitle {
              text
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
    }
    allPrismicEvent(limit: 20) {
      totalCount
      edges {
        node {
          uid
          data {
            type
            title {
              text
            }
            banner {
              url
              medium {
                url
              }
            }
            content {
              text
            }
            description {
              text
            }
            location
            event_start
            event_end
          }
        }
      }
    }
  }
`

export default IndexPage
