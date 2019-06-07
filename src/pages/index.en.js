import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeContainer from "../containers/home"

import { addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import { Context } from "../languages/context"

addLocaleData(en)

const localContext = {
  lang: "en",
  texts: {
    title: "Home",
    keywords: ["English"],
    description: "English description",
  },
}

const IndexPage = ({ data }) => {
  return (
    <Context.Provider value={localContext}>
      <Layout langKey="en">
        <HomeContainer data={data} langKey="en" />
      </Layout>
    </Context.Provider>
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

export default IndexPage