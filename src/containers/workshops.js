import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import CalendarContainer from "../components/calendar/index"
import { Section, Container, HtmlContent } from "../theme/index.styled"
import { Context, ContextEs, ContextEn } from "../languages/context"

const WorkshopPage = ({ data, pageContext }) => {
  const { lang } = pageContext
  const events = data.allPrismicEvent.edges.map(e => ({
    ...e.node.data,
    eventStart: e.node.data.event_start,
    eventEnd: e.node.data.event_end,
    uid: e.node.uid,
    lang: e.node.lang,
  }))

  const page = data.prismicLandingPages.data
  const ContextTexts = lang === "es" ? ContextEs : ContextEn
  const metakeywords = page.metakeywords.text || ContextTexts.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextTexts.texts.description
  const title = page.title.text || ContextTexts.texts.title
  const image = page.cover && page.cover.url ? page.cover.url : false
  return (
    <Context.Provider value={ContextTexts}>
      <Layout>
        <SEO
          lang={lang}
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent data={page} />
        <Section>
          <Container>
            <br />
            <HtmlContent
              dangerouslySetInnerHTML={{ __html: page.content.html }}
            />
          </Container>
        </Section>
        <CalendarContainer
          section={"workshops"}
          pageContext={pageContext}
          events={events}
          lang={lang}
        />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query WorkshopsPageQuery($skip: Int!, $limit: Int!, $langWithCode: String!) {
    allPrismicEvent(
      limit: $limit
      skip: $skip
      filter: { lang: { eq: $langWithCode }, data: { type: { in: ["Taller", "Webinar", "Panel", "Panel virtual"] } } }
    ) {
      ...eventEdgePreviewFragment
    }

    prismicLandingPages(uid: { eq: "workshops" }, lang: { eq: $langWithCode }) {
      ...landingPageDataFragment
    }
  }
`

export default WorkshopPage
