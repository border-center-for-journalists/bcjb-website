import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import AboutComponent from "../components/homeabout/index"
import TalleresComponent from "../components/hometalleres/index"
import ContactComponent from "../components/contact/index"
import UneteCompoinent from "../components/homeunete"
import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"
import { formatMenuItems } from "../services/utils"

const IndexPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)
  const talleres = data.allPrismicEvent
  const mainMenu = formatMenuItems(data.prismicMenu.data.menu_main)
  const homeMenu = formatMenuItems(data.prismicMenu.data.menu_home)
  const submenu = formatMenuItems(data.prismicMenu.data.menu_2)

  console.log("data", data)
  return (
    <ThemeProvider theme={Theme}>
      <Layout menu={mainMenu}>
        <SEO title="Inicio" keywords={[`Border Center`]} />
        <BannerComponent
          data={landingPages["home-page"]}
          menu={homeMenu}
          submenu={submenu}
        />
        <AboutComponent data={landingPages["quienes-somos"]} />
        <TalleresComponent data={talleres} />
        <ContactComponent />
        <UneteCompoinent data={landingPages["unete"]} />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    prismicMenu(uid: { eq: "bc_menu" }) {
      uid
      data {
        menu_main {
          item_url {
            url
          }
          item_title {
            text
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
  }
`

export default IndexPage
