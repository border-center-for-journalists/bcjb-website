import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ConvocatoriaComponent from "../components/convocatoria/index"

import { addLocaleData } from "react-intl"
import es from "react-intl/locale-data/es"
import { Context, TextsEs } from "../languages/context"

addLocaleData(es)

const localContext = {
  lang: "en",
  texts: TextsEs,
}

const ConcovatoriasEsPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  return (
    <Context.Provider value={localContext}>
      <Layout langKey="es">
        <SEO title="Convocatorias" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["home-page"]} />
        <ConvocatoriaComponent />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query ConvocatoriasEsPageQuery {
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
  }
`

export default ConcovatoriasEsPage
