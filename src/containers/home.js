import React, { Component } from "react"

import SEO from "../components/seo"
import BannerComponent from "../components/homebanner/index"
//import AboutComponent from "../components/homeabout/index"
import TalleresComponent from "../components/hometalleres/index"
import ContactComponent from "../components/contact/index"
import UneteComponent from "../components/homeunete/index"
import NewsComponent from "../components/homenews/index"
import SubscribeComponent from "../components/subscribe/index"
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
    //console.log("landing", landingPages)

    const talleres = this.props.data.allPrismicEvent
    const homeMenu = formatMenuItems(this.props.data.prismicMenu.data.menu_home)
    const submenu = formatMenuItems(this.props.data.prismicMenu.data.menu_2)

    const { banners } = this.props.data.prismicMenu.data

    const recentNews = this.props.data.allPrismicNoticia

    const { email_to, address, phone } = this.props.data.prismicMenu.data;
    const contactData = { email_to, address, phone };

    return (
      <Context.Consumer>
        {({ lang, texts }) => {
          const metakeywords =
            landingPages["home-page"].metakeywords.text || texts.keywords
          const contentResume = landingPages["home-page"].content.text
            ? landingPages["home-page"].content.text.slice(0, 200)
            : false
          const metadescription =
            landingPages["home-page"].metadescription.text ||
            contentResume ||
            texts.description
          const title = landingPages["home-page"].title.text || texts.title
          const image =
            landingPages["home-page"].cover &&
              landingPages["home-page"].cover.url
              ? landingPages["home-page"].cover.url
              : false
          return (
            <React.Fragment>
              <SEO
                lang={lang}
                title={title}
                keywords={metakeywords}
                description={metadescription}
                image={image}
              />
              <BannerComponent
                data={landingPages["home-page"]}
                banners={banners}
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
              {landingPages["home-page"].workshops === "Yes" && (
                <TalleresComponent lang={lang} data={talleres} />
              )}
              {landingPages["home-page"].recent_news === "Yes" && (
                <NewsComponent lang={lang} data={recentNews} />
              )}
              <ContactComponent
                location={this.props.location}
                data={landingPages["contact"]}
                contactData={contactData}
              />
              <SubscribeComponent lang={lang} />
              {/*<UneteComponent data={landingPages["unete"]} />*/}
            </React.Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default HomeContainer
