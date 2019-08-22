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
    const of = lang === "es" ? "de" : "of"
    const startDay = moment(eventStart).format(`DD [${of}] MMMM`)
    const endDay = moment(eventEnd).format(`DD [${of}] MMMM`)
    const hourStartDate = moment(eventStart).format("h:mm a")
    const hourEndDate = moment(eventEnd).format("h:mm a")

    const types = {
      "Evento especial": "Special event",
      Taller: "Workshop",
      Programa: "Program",
    }
    const type = lang === "es" ? event.data.type : types[event.data.type]
    console.log("LANG", lang, this.props.data.prismicEvent)

    return (
      <ThemeProvider theme={Theme}>
        <Context.Provider value={lang === "es" ? ContextEs : ContextEn}>
          <Layout lang={langs[this.props.data.prismicEvent.lang]}>
            <SEO title={event.data.title.text} keywords={[`Border Center`]} />

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
                              <strong>{startDay} </strong> {hourStartDate}
                            </p>
                          )}
                          {event.data.event_end && (
                            <div>
                              <p>{texts.to}</p>

                              <p>
                                <strong>{endDay} </strong> {hourEndDate}
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
                  <HtmlContent
                    dangerouslySetInnerHTML={{
                      __html: event.data.description.html,
                    }}
                  />
                </Rows>
                <HtmlContent
                  dangerouslySetInnerHTML={{ __html: event.data.content.html }}
                />
                {event.data.apply_url && (
                  <ApplyButton href={event.data.apply_url.url}>
                    {lang === "es" ? "Aplica ya" : "Apply now"}
                  </ApplyButton>
                )}
              </Container>
            </Section>
          </Layout>
        </Context.Provider>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query PostByUid($uid: String!) {
    prismicEvent(uid: { eq: $uid }) {
      uid
      lang
      data {
        title {
          text
        }
        apply_url {
          url
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
  }),
}

export default EventContainer
