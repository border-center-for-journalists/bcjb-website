import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ConvocatoriaComponent from "../components/convocatoria/index"

import { Context, ContextEs } from "../languages/context"

const ConcovatoriasEsPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  const page = landingPages["home-page"]
  //console.log("PAGE", page)
  const metakeywords = page.metakeywords.text || ContextEs.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEs.texts.description
  const title = page.metatitle.text || data.title.text || ContextEs.texts.title
  const image = page.cover && page.cover.url ? page.cover.url : false
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <SEO
          lang="es"
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent data={landingPages["home-page"]} />
        <ConvocatoriaComponent data={page} />
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

export default ConcovatoriasEsPage
