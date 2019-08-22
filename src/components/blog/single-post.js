import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerComponent from "../../components/homebanner/index"
import BlogContainer from "./index"
import { ThemeProvider } from "styled-components"
import { Theme } from "../../theme/theme"
import { Context, ContextEs, ContextEn } from "../../languages/context"

const BlogPage = ({ data, location, pageContext }) => {
  const langs = {
    "en-us": "en",
    "es-mx": "es",
  }
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
  const cover = post.banner.panoramic.url ? post.banner.panoramic : page.cover

  return (
    <ThemeProvider theme={Theme}>
      <Context.Provider
        value={langs[pageContext.lang] === "es" ? ContextEs : ContextEn}
      >
        <Layout lang={langs[data.prismicNoticia.lang]}>
          <SEO title="Blog" keywords={[`Border Center`]} />
          <BannerComponent
            data={{ title: page.title, cover: cover }}
            fullHeight={false}
          />
          <BlogContainer
            location={location}
            singlePost={post}
            posts={recentPosts}
            lang={langs[data.prismicNoticia.lang]}
          />
        </Layout>
      </Context.Provider>
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
      lang
      data {
        body {
          primary {
            name_of_the_gallery {
              text
            }
          }
          slice_type
          items {
            gallery_image {
              url
              medium {
                url
              }
            }
          }
        }

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
