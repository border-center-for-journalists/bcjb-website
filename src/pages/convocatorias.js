import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import ConvocatoriaComponent from "../components/convocatoria/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const ConcovatoriasPage = () => (
  <ThemeProvider theme={Theme}>
    <Layout>
      <SEO title="Convocatorias" keywords={[`Border Center`]} />
      <BannerComponent />
      <ConvocatoriaComponent />
    </Layout>
  </ThemeProvider>
)

export default ConcovatoriasPage
