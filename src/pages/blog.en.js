import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import BlogContainer from "../components/blog"

import { Context, ContextEn } from "../languages/context"

const BlogPage = ({ data }) => {
  const page = data.prismicLandingPages.data
  const posts = data.allPrismicNoticia.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    publishedAt: new Date(e.node.last_publication_date),
  }))

  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="en">
        <SEO title="Blog" keywords={[`Border Center`]} />
        <BannerComponent data={{ title: page.title, cover: page.cover }} />
        <BlogContainer posts={posts} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query BlogPageQuery {
    prismicLandingPages(uid: { eq: "blog" }, lang: { eq: "en-us" }) {
      ...landingPageDataFragment
    }

    allPrismicNoticia(limit: 10, filter: { lang: { eq: "en-us" } }) {
      ...noticiaEdgePreviewFragment
    }
  }
`

export default BlogPage
