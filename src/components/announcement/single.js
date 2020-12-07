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
  const lang = langs[data.prismicAnnouncement.lang]
  const page = data.prismicLandingPages.data
  const post = {
    ...data.prismicAnnouncement.data,
    uid: data.prismicAnnouncement.uid,
    publishedAt: new Date(data.prismicAnnouncement.last_publication_date),
  }
  const recentPosts = data.allPrismicAnnouncement.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    publishedAt: new Date(e.node.last_publication_date),
  }))
  //console.log("POST", post)
  const cover = post.banner.panoramic.url ? post.banner.panoramic : page.cover
  const ContextTexts = lang === "es" ? ContextEs : ContextEn
  const metakeywords = post.metakeywords.text || ContextTexts.texts.keywords
  const contentResume = post.content.text
    ? post.content.text.slice(0, 200)
    : false
  const metadescription =
    post.metadescription.text || contentResume || ContextTexts.texts.description
  const title = post.title.text || ContextTexts.texts.title
  const image = post.cover && post.cover.url ? post.cover.url : false
  post.excerptText = metadescription;
  return (
    <ThemeProvider theme={Theme}>
      <Context.Provider value={ContextTexts}>
        <Layout lang={lang}>
          <SEO
            lang={lang}
            title={title}
            keywords={metakeywords}
            description={metadescription}
            image={image}
          />
          <BannerComponent
            data={{ title: page.title, cover: cover }}
            hideTitle={true}
            fullHeight
          />
          <BlogContainer
            location={location}
            singlePost={post}
            posts={recentPosts}
            lang={lang}
          />
        </Layout>
      </Context.Provider>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query SingleAnnouncementQuery($uid: String!, $langWithCode: String!) {
    prismicLandingPages(uid: { eq: "announcement" }) {
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
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }

    prismicAnnouncement(uid: { eq: $uid }, lang:{eq: $langWithCode}) {
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
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }

    allPrismicAnnouncement(limit: 5) {
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
            metadescription {
              text
            }
            metakeywords {
              text
            }
          }
        }
      }
    }
  }
`

export default BlogPage
