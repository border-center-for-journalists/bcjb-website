import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ConvocatoriaComponent from "../components/convocatoria/index"

import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import { Context, TextsEn } from "../languages/context"

addLocaleData(en)

const localContext = {
  lang: "en",
  texts: TextsEn,
}

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
    <Context.Provider value={localContext}>
      <Layout langKey="en">
        <SEO title="Convocatorias" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["home-page"]} />
        <ConvocatoriaComponent />
      </Layout>
    </Context.Provider>
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

export default ConcovatoriasPage
