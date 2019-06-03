import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import TermsAndConditionsComponent from "../components/termsandconditions/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const TermsAndConditionsPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Términos y Condiciones" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["home-page"]} />
        <TermsAndConditionsComponent />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query TermsAndConditionsPageQuery {
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
            }
            cover {
              url
            }
          }
        }
      }
    }
  }
`

export default TermsAndConditionsPage
