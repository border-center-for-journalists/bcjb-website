import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import TermsAndConditionsComponent from "../components/termsandconditions/index"

import { Context, ContextEs } from "../languages/context"

const TermsAndConditionsEsPage = ({ data }) => {
  return (
    <Context.Provider value={ContextEs}>
      <Layout langKey="es">
        <SEO title="Términos y Condiciones" keywords={[`Border Center`]} />
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
    prismicLandingPages(uid: { eq: "terms-and-conditions" }) {
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
      }
    }
  }
`

export default TermsAndConditionsEsPage
