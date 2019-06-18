import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Section,
  Container,
  Subtitle,
  HtmlContent,
} from "../theme/index.styled"

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

  console.log("data", data)
  const page = data.prismicLandingPages.data
  return (
    <Context.Provider value={lang === "es" ? ContextEs : ContextEn}>
      <Layout>
        <SEO title={page.title.text} keywords={[`Border Center`]} />
        <BannerComponent data={page} />
        <Section>
          <Container>
            <Subtitle>{page.subtitle.text}</Subtitle>
            <HtmlContent
              programsPage
              dangerouslySetInnerHTML={{ __html: page.content.html }}
            />
          </Container>
        </Section>

        <CalendarContainer
          section={"programs"}
          pageContext={pageContext}
          events={events}
        />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query ProgramsPageQuery($skip: Int!, $limit: Int!, $langWithCode: String!) {
    allPrismicEvent(
      limit: $limit
      skip: $skip
      filter: {
        lang: { eq: $langWithCode }
        data: { type: { eq: "Programa" } }
      }
    ) {
      ...eventEdgePreviewFragment
    }

    prismicLandingPages(uid: { eq: "programs" }, lang: { eq: $langWithCode }) {
      ...landingPageCompleteDataFragment
    }
  }
`

export default CalendarEsPage
