import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeContainer from "../containers/home"

import { Context, ContextEn } from "../languages/context"

const IndexPage = ({ data }) => {
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <HomeContainer data={data} langKey="en" />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    prismicMenu(uid: { eq: "bc_menu" }, lang: { eq: "en-us" }) {
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
      filter: { lang: { eq: "en-us" }, data: { type: { eq: "Taller" } } }
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

export default IndexPage
