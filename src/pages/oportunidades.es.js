import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import OportunidadComponent from "../components/oportunidades/index"

import { Context, ContextEs } from "../languages/context"

const OportunidadesEsPage = ({ data, location}) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const formatOpportunities = edges => {
    const results = edges.reduce((result, item) => {
      let res = {
        uid: item.node.uid,
        ...item.node.data
      };
      result.push(res);
      return result
    }, [])
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  const opportunities = formatOpportunities(data.allPrismicOpportunity.edges)
  const page = landingPages["opportunity"]
  const metakeywords = page.metakeywords.text || ContextEs.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEs.texts.description
  const title = page.title.text || ContextEs.texts.title
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
        <BannerComponent data={landingPages["opportunity"]} />
        <OportunidadComponent lang={ContextEs} data={opportunities} location={location}/>
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query OportunidadesEsPageQuery {
    allPrismicOpportunity(
      limit:20
      filter: { lang: { eq: "es-mx" } }
    ) {
      totalCount
      edges {
        node {
          internal {
            type
          }
          uid
          lang
          data {
            titulo {
              text
            }
            descripcion_corta{
              text
            }
            tipo
            audiencia
            imagen_de_fondo{
              url
            }
            contenido{
              text
              html
            }
          }
        }
      }
    }
    allPrismicLandingPages(limit: 20, filter: {lang: { eq: "es-mx" }, tags: { in: ["homepage"] } }) {
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

export default OportunidadesEsPage
