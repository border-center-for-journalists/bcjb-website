import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import CalendarContainer from "../components/calendar/index"

import { ThemeProvider } from "styled-components"
import { Theme } from "../theme/theme"

const CalendarPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Calendario" keywords={[`Border Center`]} />
        <BannerComponent />
        <CalendarContainer />
      </Layout>
    </ThemeProvider>
  )
}

export default CalendarPage
