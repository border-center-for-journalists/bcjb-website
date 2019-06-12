import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import BlogContainer from "../components/blog"

// import { addLocaleData } from "react-intl"
// import es from "react-intl/locale-data/es"
// addLocaleData(es)
import { Context, ContextEs, ContextEn } from "../languages/context"

const BlogEsPage = ({ lang, data }) => {
  const page = data.prismicLandingPages.data
  const posts = data.allPrismicNoticia.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    publishedAt: new Date(e.node.last_publication_date),
  }))

  return (
    <Context.Provider value={lang === "es" ? ContextEs : ContextEn}>
      <Layout>
        <SEO title="Blog" keywords={[`Border Center`]} />
        <BannerComponent data={{ title: page.title, cover: page.cover }} />
        <BlogContainer posts={posts} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query BlogPageQuery($skip: Int!, $limit: Int!, $langWithCode: String!) {
    prismicLandingPages(uid: { eq: "blog" }, lang: { eq: $langWithCode }) {
      ...landingPageDataFragment
    }

    allPrismicNoticia(
      limit: $limit
      skip: $skip
      filter: { lang: { eq: $langWithCode } }
    ) {
      ...noticiaEdgePreviewFragment
    }
  }
`

export default BlogEsPage
