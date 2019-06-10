import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ContactComponent from "../components/contact/index"
import MapComponent from "../components/contact/map"

import { addLocaleData } from "react-intl"
import es from "react-intl/locale-data/es"
import { Context, TextsEs } from "../languages/context"

addLocaleData(es)

const localContext = {
  lang: "es",
  texts: TextsEs,
}

const ContactEsPage = ({ data }) => {
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
        <SEO title="Contacto" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["home-page"]} />
        <ContactComponent />
        <MapComponent />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query ContactEsPageQuery {
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

export default ContactEsPage
