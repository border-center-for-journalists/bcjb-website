import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BannerComponent from "../../components/homebanner/index"
import BlogContainer from "./container"
import { ThemeProvider } from "styled-components"
import { Theme } from "../../theme/theme"
import { Context, ContextEs, ContextEn } from "../../languages/context"

const BlogPage = ({ data, location, pageContext }) => {
  const langs = {
    "en-us": "en",
    "es-mx": "es",
  }
  const lang = langs[data.prismicOpportunity.lang]
  const page = data.prismicLandingPages.data
  const post = {
    ...data.prismicOpportunity.data,
    uid: data.prismicOpportunity.uid,
    //publishedAt: new Date(data.prismicOpportunity.last_publication_date),
  }
  const recentPosts = data.allPrismicOpportunity.edges.map(e => ({
    ...e.node.data,
    uid: e.node.uid,
    // publishedAt: new Date(e.node.last_publication_date),
  }))
  // console.log({post})

  const cover = post.imagen_de_fondo && post.imagen_de_fondo.url  ? post.imagen_de_fondo : page.cover
  const ContextTexts = lang === "es" ? ContextEs : ContextEn
  const metakeywords = post.metakeywords ? post.metakeywords.text : ContextTexts.texts.keywords
  const contentResume = post.content
    ? post.content.text.slice(0, 200)
    : false
  const metadescription = post.metadescription ? 
    post.metadescription.text || contentResume || ContextTexts.texts.description : contentResume || ContextTexts.texts.description
  const title = post.title ? post.title.text : ContextTexts.texts.title
  const image = post.imagen_de_fondo && post.imagen_de_fondo.url ? post.imagen_de_fondo.url : page.cover
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
            title={post.titulo}
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
  query SingleOpportunityQuery($uid: String!, $langWithCode: String!) {
    prismicLandingPages(uid: { eq: "opportunity" }) {
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

    prismicOpportunity(uid: { eq: $uid }, lang:{eq: $langWithCode}) {
      uid
      last_publication_date
      lang
      data {
        titulo {
          text
        }
        descripcion_corta {
          text
        }
        tipo
        audiencia
        imagen_de_fondo {
          url
        }
        contenido {
          text
        }
      }
    }
    allPrismicOpportunity(limit:5) {
      totalCount
      edges {
        node {
          internal {
            type
          }
          uid
          lang
          data {
            titulo {
              text
            }
            descripcion_corta {
              text
            }
            tipo
            audiencia
            imagen_de_fondo {
              url
            }
            contenido{
              text
            }
          }
        }
      }
    }
  }
`

export default BlogPage
