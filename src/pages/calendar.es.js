import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import CalendarContainer from "../components/calendar/index"
import { addLocaleData } from "react-intl"
import es from "react-intl/locale-data/es"
import { Context, TextsEs } from "../languages/context"

addLocaleData(es)

const localContext = {
  lang: "es",
  texts: TextsEs,
}

const CalendarEsPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }

  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)

  const events = data.allPrismicEvent.edges.map(e => ({
    ...e.node.data,
    eventStart: new Date(e.node.data.event_start),
    eventEnd: new Date(e.node.data.event_end),
    uid: e.node.uid,
  }))
  return (
    <Context.Provider value={localContext}>
      <Layout langKey="es">
        <SEO title="Calendario" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["calendar"]} fullHeight={false} />
        <CalendarContainer events={events} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query CalendarEsPageQuery {
    allPrismicEvent(limit: 20) {
      totalCount
      edges {
        node {
          uid
          data {
            title {
              text
            }
            banner {
              url
              mediumpanoramic {
                url
              }
            }
            content {
              text
            }
            location
            event_start
            event_end
          }
        }
      }
    }

    allPrismicLandingPages(
      limit: 20
      filter: { tags: { in: ["singlepage"] } }
    ) {
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
  }
`

export default CalendarEsPage
