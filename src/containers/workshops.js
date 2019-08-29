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
              dangerouslySetInnerHTML={{
                __html:
                  '<div class="embed-container"><iframe src="https://fusiontables.google.com/embedviz?q=select+col0+from+1DU1oGaYpbMUlF3oP30BRBnere77CZQtu7Ng_zSuJ&amp;viz=MAP&amp;h=false&amp;lat=23.905926927314734&amp;lng=-99.9795078125&amp;t=1&amp;z=5&amp;l=col0&amp;y=2&amp;tmplt=3&amp;hml=GEOCODABLE" scrolling="no" width="800" height="480" frameborder="no"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" class="mce_SELRES_start">﻿</span></iframe></div>',
              }}
            />
            <br />
            <HtmlContent
              dangerouslySetInnerHTML={{ __html: page.content.html }}
            />
            <br />
            <HtmlContent
              hideLtSm
              dangerouslySetInnerHTML={{
                __html:
                  '<div class="embed-container lgs"><iframe scrolling="no" src="https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&amp;q=select+col0%2C+col3%2C+col4%2C+col5%2C+col6%2C+col12+from+1DU1oGaYpbMUlF3oP30BRBnere77CZQtu7Ng_zSuJ+order+by+col3+asc+limit+20&amp;viz=GVIZ&amp;t=COLUMN&amp;uiversion=2&amp;gco_forceIFrame=true&amp;gco_hasLabelsColumn=true&amp;att=true&amp;width=800&amp;height=485" width="800" height="500" frameborder="no"></iframe></div>',
              }}
            />

            <HtmlContent
              showLtSm
              dangerouslySetInnerHTML={{
                __html:
                  '<div class="embed-container medi"><iframe scrolling="no" src="https://fusiontables.google.com/embedviz?containerId=googft-gviz-canvas&amp;q=select+col0%2C+col3%2C+col4%2C+col5%2C+col6%2C+col12+from+1DU1oGaYpbMUlF3oP30BRBnere77CZQtu7Ng_zSuJ+order+by+col3+asc+limit+20&amp;viz=GVIZ&amp;t=COLUMN&amp;uiversion=2&amp;gco_forceIFrame=true&amp;gco_hasLabelsColumn=true&amp;att=true&amp;width=400&amp;height=242" width="800" height="500" frameborder="no"></iframe></div>',
              }}
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
      filter: { lang: { eq: $langWithCode }, data: { type: { eq: "Taller" } } }
    ) {
      ...eventEdgePreviewFragment
    }

    prismicLandingPages(uid: { eq: "workshops" }, lang: { eq: $langWithCode }) {
      ...landingPageDataFragment
    }
  }
`

export default WorkshopPage
