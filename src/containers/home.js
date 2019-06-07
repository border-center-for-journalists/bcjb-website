import React, { Component } from "react"

import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import AboutComponent from "../components/homeabout/index"
import TalleresComponent from "../components/hometalleres/index"
import ContactComponent from "../components/contact/index"

import { Context } from "../languages/context"

class HomeContainer extends Component {
  render() {
    const formatLandingPages = edges => {
      const results = edges.reduce((result, item) => {
        result[item.node.uid] = item.node.data
        return result
      }, {})
      return results
    }
    const landingPages = formatLandingPages(
      this.props.data.allPrismicLandingPages.edges
    )
    const talleres = this.props.data.allPrismicEvent
    return (
      <Context.Consumer>
        {({ lang, texts }) => {
          return (
            <React.Fragment>
              <SEO
                lang={lang}
                title={texts.title}
                keywords={texts.keywords}
                description={texts.description}
              />
              <BannerComponent data={landingPages["home-page"]} menu />
              <AboutComponent data={landingPages["quienes-somos"]} />
              <TalleresComponent data={talleres} />
              <ContactComponent />
            </React.Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer