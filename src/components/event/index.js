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
import { Context } from "../../languages/context"

moment.locale("es")

class EventContainer extends Component {
  render() {
    const event = this.props.data.prismicEvent
    const uid = this.props.data.prismicEvent.uid
    const eventStart = new Date(event.data.event_start)
    const eventEnd = new Date(event.data.event_end)
    const startDay = moment(eventStart).format("DD [de] MMMM")
    const endDay = moment(eventEnd).format("DD [de] MMMM")
    const hourStartDate = moment(eventStart).format("h:mm a")
    const hourEndDate = moment(eventEnd).format("h:mm a")

    return (
      <ThemeProvider theme={Theme}>
        <Layout>
          <SEO title={event.data.title.text} keywords={[`Border Center`]} />

          <BannerComponent
            data={{
              cover: event.data.banner.panoramic,
              title: { text: event.data.type },
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
                          <strong>Tipo de evento:</strong>
                        </p>
                        <p>{event.data.type}</p>

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
                              <i class="icon-ubicacion" /> {event.data.location}
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
                  Aplica ya
                </ApplyButton>
              )}
            </Container>
          </Section>
        </Layout>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query PostByUid($uid: String!) {
    prismicEvent(uid: { eq: $uid }) {
      uid
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
