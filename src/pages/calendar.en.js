import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import CalendarContainer from "../components/calendar/index"

import { Context, ContextEn } from "../languages/context"

const CalendarPage = ({ data }) => {
  const events = data.allPrismicEvent.edges.map(e => ({
    ...e.node.data,
    eventStart: new Date(e.node.data.event_start),
    eventEnd: new Date(e.node.data.event_end),
    uid: e.node.uid,
  }))

  const calendarPage = data.prismicLandingPages.data
  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <SEO title={calendarPage.title.text} keywords={[`Border Center`]} />
        <BannerComponent data={calendarPage} />
        <CalendarContainer events={events} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query CalendarPageQuery {
    allPrismicEvent(limit: 20, filter: { lang: { eq: "en-us" } }) {
      ...eventEdgePreviewFragment
    }

    prismicLandingPages(uid: { eq: "calendar" }) {
      ...landingPageDataFragment
    }
  }
`

export default CalendarPage
