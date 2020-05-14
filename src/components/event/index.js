import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { Theme } from "../../theme/theme"
import {
  Section,
  Container,
  Subtitle,
  Rows,
  HtmlContent,
} from "../../theme/index.styled"
import SEO from "../../components/seo"
import BannerComponent from "../../components/homebanner/index"
import Layout from "../../components/layout"
import { EventMetaContainer, ApplyButton } from "./index.styled"
import "moment/locale/es"
import moment from "moment"
import { Context, ContextEs, ContextEn } from "../../languages/context"

class EventContainer extends Component {
  render() {
    const langs = {
      "en-us": "en",
      "es-mx": "es",
    }
    const lang = langs[this.props.data.prismicEvent.lang]
    const event = this.props.data.prismicEvent
    const uid = this.props.data.prismicEvent.uid
    moment.locale(lang)
    const eventStart = event.data.event_start
    const eventEnd = event.data.event_end
    const time_disable = event.data.time_disable
    const startDay = lang === "es" ? moment(eventStart).format('DD [de] MMMM, YYYY') : moment(eventStart).format('MMMM DD[,] YYYY');
    const endDay = lang === "es" ? moment(eventEnd).format('DD [de] MMMM, YYYY') : moment(eventEnd).format('MMMM DD[,] YYYY');
    const hourStartDate = moment(eventStart).format("h:mm a")
    const hourEndDate = moment(eventEnd).format("h:mm a")

    const types = {
      "Evento especial": "Special event",
      Taller: "Workshop",
      Programa: "Program",
      Webinar: "Webinar",
      Panel: "Panel",
      "Panel virtual": "Virtual Panel",
      "Curso en Línea": "Online Course"
    }
    const type = lang === "es" ? event.data.type : types[event.data.type]
    //console.log("LANG", lang, this.props.data.prismicEvent)

    const metakeywords =
      event.data.metakeywords.text || ContextEs.texts.keywords
    const contentResume = event.data.content.text
      ? event.data.content.text.slice(0, 200)
      : false
    const metadescription =
      event.data.metadescription.text ||
      contentResume ||
      ContextEs.texts.description
    const title = event.data.title.text || ContextEs.texts.title
    const image = event.banner && event.banner.url ? event.banner.url : false
    const buttonTextDefault = lang === "es" ? "Aplica ya" : "Apply now";
    const buttonText = event.data.button_text.text || buttonTextDefault;
    return (
      <ThemeProvider theme={Theme}>
        <Context.Provider value={lang === "es" ? ContextEs : ContextEn}>
          <Layout lang={langs[this.props.data.prismicEvent.lang]}>
            <SEO
              lang={lang}
              title={title}
              keywords={metakeywords}
              description={metadescription}
              image={image}
            />

            <BannerComponent
              data={{
                cover: event.data.banner.panoramic,
                title: { text: type },
              }}
              fullHeight={false}
            />
            <Section>
              <Container>
                <Subtitle>{event.data.title.text}</Subtitle>
                <Rows>
                  <div>
                    <Context.Consumer>
                      {({ texts }) => (
                        <EventMetaContainer>
                          <p>
                            <strong>
                              {lang === "es" ? "Tipo de evento" : "Event type"}:
                            </strong>
                          </p>
                          <p>{type}</p>

                          {event.data.event_start && (
                            <p>
                              <strong>{startDay} </strong> {time_disable ? "" : hourStartDate}
                            </p>
                          )}
                          {event.data.event_end && (
                            <div>
                              <p>{texts.to}</p>

                              <p>
                                <strong>{endDay} </strong> {time_disable ? "" :hourEndDate}
                              </p>
                            </div>
                          )}
                          {event.data.location && (
                            <p>
                              <strong>
                                <i className="icon-ubicacion" />{" "}
                                {event.data.location}
                              </strong>
                            </p>
                          )}
                        </EventMetaContainer>
                      )}
                    </Context.Consumer>
                  </div>
                </Rows>
                {event.data.apply_url && (
                  <ApplyButton href={event.data.apply_url.url}>
                    {buttonText}
                  </ApplyButton>
                )}
                <HtmlContent
                  dangerouslySetInnerHTML={{ __html: event.data.content.html }}
                />
              </Container>
            </Section>
          </Layout>
        </Context.Provider>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query PostByUid($uid: String!, $langWithCode: String!) {
    prismicEvent(uid: { eq: $uid }, lang: { eq: $langWithCode }) {
      uid
      lang
      data {
        title {
          text
        }
        apply_url {
          url
        }
        button_text {
          text
        }
        banner {
          url
          panoramic {
            url
          }
        }
        content {
          text
          html
        }
        type
        description {
          text
          html
        }
        location
        event_start
        event_end
        time_disable
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

EventContainer.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.shape({ text: PropTypes.string }),
    banner: PropTypes.shape({
      url: PropTypes.string,
      medium: PropTypes.shape({ url: PropTypes.string }),
    }),
    location: PropTypes.string,
    eventStart: PropTypes.instanceOf(Date),
    eventEnd: PropTypes.instanceOf(Date),
    time_disable: PropTypes.bool
  }),
}

export default EventContainer
