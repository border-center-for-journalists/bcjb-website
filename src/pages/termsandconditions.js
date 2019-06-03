import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import TermsAndConditionsComponent from "../components/termsandconditions/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const TermsAndConditionsPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Términos y Condiciones" keywords={[`Border Center`]} />
        <BannerComponent />
        <TermsAndConditionsComponent />
      </Layout>
    </ThemeProvider>
  )
}

export default TermsAndConditionsPage
