import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import BlogContainer from "../components/announcement"

// import { addLocaleData } from "react-intl"
// import es from "react-intl/locale-data/es"
// addLocaleData(es)
import { Context, ContextEs, ContextEn } from "../languages/context"

const BlogEsPage = ({ data, pageContext }) => {
  const { lang } = pageContext
  const page = data.prismicLandingPages.data
  const posts = data.allPrismicAnnouncement.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    publishedAt: new Date(e.node.data.custom_publication_date),
  }))
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
      <Layout lang={lang}>
        <SEO
          lang={lang}
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent data={{ title: page.title, cover: page.cover }} />
        <BlogContainer lang={lang} pageContext={pageContext} posts={posts} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query AnnouncementPageQuery($skip: Int!, $limit: Int!, $langWithCode: String!) {
    prismicLandingPages(uid: { eq: "announcement" }, lang: { eq: $langWithCode }) {
      ...landingPageDataFragment
    }

    allPrismicAnnouncement(
      limit: $limit
      skip: $skip
      filter: { lang: { eq: $langWithCode } }
      sort: { fields: [data___custom_publication_date], order: DESC }
    ) {
      ...announcementEdgePreviewFragment
    }
  }
`

export default BlogEsPage
