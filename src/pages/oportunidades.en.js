import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import OportunidadComponent from "../components/oportunidades/index"

import { Context, ContextEn } from "../languages/context"

const OportunidadesPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  //console.log(landingPages)
  const page = landingPages["home-page"]
  const metakeywords = page.metakeywords.text || ContextEn.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEn.texts.description
  const title = page.title.text || ContextEn.texts.title
  const image = page.cover && page.cover.url ? page.cover.url : false
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <SEO
          lang="en"
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent data={landingPages["home-page"]} />
        <OportunidadComponent data={page} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query OportunidadesPageQuery {
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
            content {
              text
            }
            cover {
              url
            }
            metadescription {
              text
            }
            metakeywords {
              text
            }
          }
        }
      }
    }
  }
`

export default OportunidadesPage
