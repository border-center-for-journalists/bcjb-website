import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import BlogContainer from "../components/blog"

import { addLocaleData } from "react-intl"
import es from "react-intl/locale-data/es"
import { Context, ContextEn } from "../languages/context"

addLocaleData(es)

const BlogEsPage = ({ data }) => {
  const page = data.prismicLandingPages.data
  const posts = data.allPrismicNoticia.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    publishedAt: new Date(e.node.last_publication_date),
  }))

  return (
    <Context.Provider value={ContextEn}>
      <Layout langKey="es">
        <SEO title="Blog" keywords={[`Border Center`]} />
        <BannerComponent
          data={{ title: page.title, cover: page.cover }}
          fullHeight={false}
        />
        <BlogContainer posts={posts} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query BlogEsPageQuery {
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

    allPrismicNoticia(limit: 10) {
      totalCount
      edges {
        node {
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
      }
    }
  }
`

export default BlogEsPage
