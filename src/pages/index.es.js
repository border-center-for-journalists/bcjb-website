import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeContainer from "../containers/home"

import { addLocaleData } from "react-intl"
import es from "react-intl/locale-data/es"
import { Context, TextsEs } from "../languages/context"

addLocaleData(es)

const localContext = {
  lang: "es",
  texts: TextsEs,
}

const IndexEsPage = ({ data }) => {
  return (
    <Context.Provider value={localContext}>
      <Layout langKey="es">
        <HomeContainer data={data} langKey="es" />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query IndexEsPageQuery {
    prismicMenu(uid: { eq: "bc_menu" }) {
      uid
      data {
        menu_home {
          item_url {
            url
          }
          item_title {
            text
          }
        }
        menu_2 {
          item_url {
            url
          }
          item_title {
            text
          }
        }
      }
    }

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
    allPrismicEvent(filter: { data: { type: { eq: "Taller" } } }) {
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
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`

export default IndexEsPage
