import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerComponent from "../../components/homebanner/index"
import BlogContainer from "./index"
import { ThemeProvider } from "styled-components"
import { Theme } from "../../theme/theme"

const BlogPage = ({ data }) => {
  const page = data.prismicLandingPages.data
  const post = {
    ...data.prismicNoticia.data,
    uid: data.prismicNoticia.uid,
    publishedAt: new Date(data.prismicNoticia.last_publication_date),
  }
  const recentPosts = data.allPrismicNoticia.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    publishedAt: new Date(e.node.last_publication_date),
  }))

  console.log("post", post)
  console.log("recentPosts", recentPosts)

  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Blog" keywords={[`Border Center`]} />
        <BannerComponent
          data={{ title: page.title, cover: page.cover }}
          fullHeight={false}
        />
        <BlogContainer singlePost={post} posts={recentPosts} />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query SingleBlogPostQuery($uid: String!) {
    prismicLandingPages(uid: { eq: "blog" }) {
      uid
      data {
        title {
          text
        }
        subtitle {
          text
        }
        excerpt {
          html
          text
        }
        cover {
          url
        }
      }
    }

    prismicNoticia(uid: { eq: $uid }) {
      uid
      last_publication_date
      data {
        author
        banner {
          url
          panoramic {
            url
          }

          medium {
            url
          }
        }
        title {
          text
        }
        content {
          text
          html
        }
        excerpt {
          text
        }
      }
    }

    allPrismicNoticia(limit: 5) {
      totalCount
      edges {
        node {
          uid
          last_publication_date
          data {
            author
            title {
              text
            }
            excerpt {
              text
            }
          }
        }
      }
    }
  }
`

export default BlogPage
