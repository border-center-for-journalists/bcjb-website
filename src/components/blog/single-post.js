import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerComponent from "../../components/homebanner/index"
import BlogContainer from "./index"
import { ThemeProvider } from "styled-components"
import { Theme } from "../../theme/theme"
import { Context, ContextEs, ContextEn } from "../../languages/context"
import RecomendedBlogsComponent from './recomended-posts'
const BlogPage = ({ data, location, pageContext }) => {
  const langs = {
    "en-us": "en",
    "es-mx": "es",
  }
  const lang = langs[data.prismicNoticia.lang]
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
  const recomendedBlogs = data.recomendedBlogs.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    lang: e.node.lang,
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
          <RecomendedBlogsComponent
            lang={lang}
            recomendedBlogs={recomendedBlogs}
          />
        </Layout>
      </Context.Provider>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query SingleBlogPostQuery($uid: String!, $langWithCode: String!) {
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
        metadescription {
          text
        }
        metakeywords {
          text
        }
      }
    }

    prismicNoticia(uid: { eq: $uid }, lang:{eq: $langWithCode}) {
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
        tags{
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
            metadescription {
              text
            }
            metakeywords {
              text
            }
            tags{
              text
            }
          }
        }
      }
    }
    recomendedBlogs:allPrismicNoticia(filter: {lang: {eq: $langWithCode}} limit: 10, sort:{fields: last_publication_date, order: DESC}) {
      totalCount
      edges {
        node {
          uid
          last_publication_date
          lang
          data {
            author
            title {
              text
            }
            banner {
              medium {
                url
              }
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
