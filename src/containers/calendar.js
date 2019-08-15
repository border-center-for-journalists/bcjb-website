import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import CalendarContainer from "../components/calendar/index"

import { Context, ContextEs, ContextEn } from "../languages/context"

const CalendarEsPage = ({ data, pageContext }) => {
  const { lang } = pageContext
  const events = data.allPrismicEvent.edges.map(e => ({
    ...e.node.data,
    eventStart: new Date(e.node.data.event_start),
    eventEnd: new Date(e.node.data.event_end),
    uid: e.node.uid,
    lang: e.node.lang,
  }))

  const calendarPage = data.prismicLandingPages.data
  return (
    <Context.Provider value={lang === "es" ? ContextEs : ContextEn}>
      <Layout lang={lang}>
        <SEO title={calendarPage.title.text} keywords={[`Border Center`]} />
        <BannerComponent data={calendarPage} />
        <CalendarContainer
          section={"calendar"}
          pageContext={pageContext}
          events={events}
        />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query CalendarPageQuery($skip: Int!, $limit: Int!, $langWithCode: String!) {
    allPrismicEvent(
      limit: $limit
      skip: $skip
      filter: { lang: { eq: $langWithCode } }
    ) {
      ...eventEdgePreviewFragment
    }

    prismicLandingPages(uid: { eq: "calendar" }, lang: { eq: $langWithCode }) {
      ...landingPageDataFragment
    }
  }
`

export default CalendarEsPage
