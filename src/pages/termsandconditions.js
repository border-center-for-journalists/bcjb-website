import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import TermsAndConditionsComponent from "../components/termsandconditions/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const TermsAndConditionsPage = ({ data }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Términos y Condiciones" keywords={[`Border Center`]} />
        <BannerComponent
          fullHeight={false}
          data={data.prismicLandingPages.data}
        />
        <TermsAndConditionsComponent data={data.prismicLandingPages.data} />
      </Layout>
    </ThemeProvider>
  )
}

export const pageQuery = graphql`
  query TermsAndConditionsPageQuery {
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

export default TermsAndConditionsPage
