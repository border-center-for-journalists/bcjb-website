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
    eventStart: e.node.data.event_start,
    eventEnd: e.node.data.event_end,
    uid: e.node.uid,
    lang: e.node.lang,
  }))

  //console.log("data", data)
  const page = data.prismicLandingPages.data
  const ContextTexts = lang === "es" ? ContextEs : ContextEn
  const metakeywords = page.metakeywords.text || ContextTexts.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextTexts.texts.description
  const title = page.title.text || ContextTexts.texts.title
  return (
    <Context.Provider value={ContextTexts}>
      <Layout>
        <SEO
          lang={lang}
          title={title}
          keywords={metakeywords}
          description={metadescription}
        />
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
          lang={lang}
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
