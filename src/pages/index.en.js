import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeContainer from "../containers/home"

import { Context, ContextEn } from "../languages/context"

const IndexPage = props => {
  const { data, location } = props
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <HomeContainer data={data} location={location} langKey="en" />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery($langWithCode: String!) {
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

    allPrismicNoticia(
      limit: 4
      filter: { lang: { eq: $langWithCode } }
      sort: { fields: [data___custom_publication_date], order: DESC }
    ) {
      ...noticiaEdgePreviewFragment
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
