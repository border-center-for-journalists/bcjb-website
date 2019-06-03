import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import AboutComponent from "../components/homeabout/index"
import TalleresComponent from "../components/hometalleres/index"
import ContactComponent from "../components/contact/index"
import UneteComponent from "../components/homeunete/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const IndexPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  const talleres = data.allPrismicTalleres
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Inicio" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["home-page"]} />
        <AboutComponent data={landingPages["quienes-somos"]} />
        <TalleresComponent data={talleres} />
        <ContactComponent />
        <UneteComponent data={landingPages["unete"]} />
      </Layout>
    </ThemeProvider>
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
            }
            cover {
              url
            }
          }
        }
      }
    }
    allPrismicTalleres(limit: 6) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            excerpt {
              text
            }
            cover {
              small {
                url
              }
            }
            time(formatString: "MMMM DD | YYYY,hh:mm A")
          }
        }
      }
    }
  }
`

export default IndexPage
