import React, { Component } from "react"

import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
import AboutComponent from "../components/homeabout/index"
import TalleresComponent from "../components/hometalleres/index"
import ContactComponent from "../components/contact/index"
import UneteComponent from "../components/homeunete/index"
import NewsComponent from "../components/homenews/index"
import { formatMenuItems } from "../services/utils"
import { Context } from "../languages/context"
import { HtmlContent, Section, Container, Title2 } from "../theme/index.styled"

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
    const homeMenu = formatMenuItems(this.props.data.prismicMenu.data.menu_home)
    const submenu = formatMenuItems(this.props.data.prismicMenu.data.menu_2)

    const recentNews = this.props.data.allPrismicNoticia

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
              <BannerComponent
                data={landingPages["home-page"]}
                menu={homeMenu}
                submenu={submenu}
                fullHeight
              />
              <Section>
                <Container size="medium">
                  <Title2>{landingPages["home-page"].subtitle.text}</Title2>
                  <HtmlContent
                    dangerouslySetInnerHTML={{
                      __html: landingPages["home-page"].content.html,
                    }}
                  />
                </Container>
              </Section>
              <TalleresComponent data={talleres} />
              {landingPages["home-page"].extra_section === "Recent News" && (
                <NewsComponent data={recentNews} />
              )}
              <ContactComponent data={landingPages["contact"]} />
              <UneteComponent data={landingPages["unete"]} />
            </React.Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer
