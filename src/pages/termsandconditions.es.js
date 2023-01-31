import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import TermsAndConditionsComponent from "../components/termsandconditions/index"

import { Context, ContextEs } from "../languages/context"

const TermsAndConditionsEsPage = ({ data }) => {
  const page = data.prismicLandingPages.data
  const metakeywords = page.metakeywords.text || ContextEs.texts.keywords
  const contentResume = page.content.text
    ? page.content.text.slice(0, 200)
    : false
  const metadescription =
    page.metadescription.text || contentResume || ContextEs.texts.description
  const title = data.metatitle.text || data.title.text || ContextEs.texts.title
  const image = page.cover && page.cover.url ? page.cover.url : false
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <SEO
          lang="es"
          title={title}
          keywords={metakeywords}
          description={metadescription}
          image={image}
        />
        <BannerComponent
          fullHeight={false}
          data={data.prismicLandingPages.data}
        />
        <TermsAndConditionsComponent data={data.prismicLandingPages.data} />
      </Layout>
    </Context.Provider>
  )
}

export const pageQuery = graphql`
  query TermsAndConditionsPageEsQuery {
    prismicLandingPages(uid: { eq: "privacy-policy" }, lang: { eq: "es-mx" }) {
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
        content {
          text
          html
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
`

export default TermsAndConditionsEsPage
