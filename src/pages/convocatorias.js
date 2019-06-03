import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ConvocatoriaComponent from "../components/convocatoria/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const ConcovatoriasPage = ({ data }) => {
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
        <SEO title="Convocatorias" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["home-page"]} />
        <ConvocatoriaComponent />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query ConvocatoriasPageQuery {
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

export default ConcovatoriasPage
