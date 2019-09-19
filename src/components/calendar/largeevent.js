import React, { Component } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import "moment/locale/es"
import {
  EventSingleTitle,
  EventContent,
  ImageWrapper,
  EventMeta,
  EventLocation,
  LargeEventContainer,
  LargeEventData,
} from "./index.styled"

import { Context } from "../../languages/context"

class LargeEventComponent extends Component {
  render() {
    const lang = this.props.lang ? this.props.lang : "es"
    moment.locale(lang)
    const {
      title,
      banner,
      content,
      description,
      location,
      eventStart,
      eventEnd,
      uid,
    } = this.props.event
    const bannerUrl = banner.mediumpanoramic
      ? banner.mediumpanoramic.url
      : banner.url
    const of = lang === "es" ? "de" : "of"
    const startDate = moment(eventStart).format(`DD [${of}] MMMM h:mm a`)
    const endDate = moment(eventEnd).format(`DD [${of}] MMMM h:mm a`)
    return (
      <Context.Consumer>
        {({ lang }) => {
          const url = `/${lang}/events/${uid}`
          return (
            <LargeEventContainer>
              <LargeEventData>
                <p>PROGRAM:</p>
                <EventSingleTitle>
                  <a href={url}>{title.text}</a>
                </EventSingleTitle>
              </LargeEventData>

              <EventContent>
                {location && (
                  <EventLocation>
                    <i className="icon-ubicacion" />
                    {"  "}
                    {location}
                  </EventLocation>
                )}
                {description && description.text && (
                  <p>{description.text.slice(0, 200)}... </p>
                )}
              </EventContent>
              <ImageWrapper>
                <a href={url}>
                  <img alt="my name im" src={bannerUrl} />
                </a>
              </ImageWrapper>
            </LargeEventContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

LargeEventComponent.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.shape({ text: PropTypes.string }),
    banner: PropTypes.shape({
      url: PropTypes.string,
      mediumpanoramic: PropTypes.shape({ url: PropTypes.string }),
    }),
    description: PropTypes.shape({ text: PropTypes.string }),
  }),
}

export default LargeEventComponent
