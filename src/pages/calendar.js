import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import CalendarContainer from "../components/calendar/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const CalendarPage = ({ data }) => {
  const formatLandingPages = edges => {
    const results = edges.reduce((result, item) => {
      result[item.node.uid] = item.node.data
      return result
    }, {})
    return results
  }

  console.log("data", data)
  const landingPages = formatLandingPages(data.allPrismicLandingPages.edges)

  const events = data.allPrismicEvent.edges.map(e => ({
    ...e.node.data,
    eventStart: new Date(e.node.data.event_start),
    eventEnd: new Date(e.node.data.event_end),
    uid: e.node.uid,
  }))
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Calendario" keywords={[`Border Center`]} />
        <BannerComponent data={landingPages["calendar"]} fullHeight={false} />
        <CalendarContainer events={events} />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query CalendarPageQuery {
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

export default CalendarPage
