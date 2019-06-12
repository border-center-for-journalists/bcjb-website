import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeContainer from "../containers/home"

import { Context, ContextEs } from "../languages/context"

const IndexEsPage = ({ data }) => {
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <HomeContainer data={data} langKey="es" />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query IndexEsPageQuery {
    prismicMenu(uid: { eq: "bc_menu" }, lang: { eq: "es-mx" }) {
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
      ...landingPagesEdgeFragment
    }

    allPrismicEvent(
      filter: { lang: { eq: "es-mx" }, data: { type: { eq: "Taller" } } }
    ) {
      ...eventEdgePreviewFragment
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