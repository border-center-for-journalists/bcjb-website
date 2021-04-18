import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HomeContainer from "../containers/home"

import { Context, ContextEs } from "../languages/context"

const IndexEsPage = props => {
  const { data, location } = props

  // useEffect(() => { console.log(props) });
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <HomeContainer data={data} location={location} langKey="es" />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query IndexEsPageQuery($langWithCode: String!, $todayDate: Date!) {
    prismicMenu(uid: { eq: "bc_menu" }, lang: { eq: "es-mx" }) {
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
      filter: { lang: { eq: "es-mx" }, tags: { in: ["homepage"] } }
    ) {
      ...landingPagesEdgeFragment
    }

    allPrismicEvent(
      filter: {
        lang: {
          eq: "es-mx"
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

    allPrismicNoticia(
      limit: 4
      filter: { lang: { eq: $langWithCode } }
      sort: { fields: [data___custom_publication_date], order: DESC }
    ) {
      ...noticiaEdgePreviewFragment
    }

    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allPrismicOpportunity(
      limit:4
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
            }
          }
        }
      }
    }
  }
`

export default IndexEsPage
