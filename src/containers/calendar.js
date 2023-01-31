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
    eventStart: e.node.data.event_start,
    eventEnd: e.node.data.event_end,
    uid: e.node.uid,
    lang: e.node.lang,
  }))

  const calendarPage = data.prismicLandingPages.data
  const ContextTexts = lang === "es" ? ContextEs : ContextEn
  const metakeywords =
    calendarPage.metakeywords.text || ContextTexts.texts.keywords
  const contentResume = calendarPage.content.text
    ? calendarPage.content.text.slice(0, 200)
    : false
  const metadescription =
    calendarPage.metadescription.text ||
    contentResume ||
    ContextTexts.texts.description
  const title = calendarPage.metatitle.text || calendarPage.title.text || ContextTexts.texts.title
  const image =
    calendarPage.cover && calendarPage.cover.url
      ? calendarPage.cover.url
      : false
  return (
    <Context.Provider value={ContextTexts}>
      <Layout lang={lang}>
        <SEO
          lang={lang}
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent data={calendarPage} />
        <CalendarContainer
          lang={lang}
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
      sort: { fields: [data___event_start], order: DESC }
      filter: {
        lang: { eq: $langWithCode }
        data: { type: { ne: "Programa" } }
      }
    ) {
      ...eventEdgePreviewFragment
    }

    prismicLandingPages(uid: { eq: "calendar" }, lang: { eq: $langWithCode }) {
      ...landingPageDataFragment
    }
  }
`

export default CalendarEsPage
