import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeContainer from "../containers/home"

import { Context, ContextEn } from "../languages/context"

const IndexPage = props => {
  const { data, location } = props
  // useEffect(() => {
  //   console.log(props.data)
  // })
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <HomeContainer data={data} location={location} langKey="en" />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery($langWithCode: String!, $todayDate: Date!) {
    prismicMenu(uid: { eq: "bc_menu" }, lang: { eq: "en-us" }) {
      uid
      data {
        phone {
          text
        }
        address {
          text
        }
        email_to
        banners{
          cover{
            url
          }
        }
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

    allPrismicLandingPages(
      limit: 20
      filter: { lang: { eq: $langWithCode }, tags: { in: ["homepage"] } }
    ) {
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
      filter: {
        lang: {
          eq: "en-us"
        },
        data: {
          type: {
            nin:["Programa"]
          },
          event_end: {
            gte: $todayDate
          }
        }
      }
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
