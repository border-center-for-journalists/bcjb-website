import React, { Component } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import "moment/locale/es"
import {
  EventSingleTitle,
  EventContent,
  EventContainer,
  ImageWrapper,
  EventMeta,
  EventLocation,
} from "./index.styled"

import { Context } from "../../languages/context"

class EventComponent extends Component {
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
    const startDate = lang === "es" ? moment(eventStart).format('DD [de] MMMM, YYYY') : moment(eventStart).format('MMMM DD[,] YYYY');
    const endDate = lang === "es" ? moment(eventEnd).format('DD [de] MMMM, YYYY') : moment(eventEnd).format('MMMM DD[,] YYYY');
    return (
      <Context.Consumer>
        {({ lang }) => {
          const url = `/${lang}/events/${uid}`
          return (
            <EventContainer>
              <a href={url}>
                <ImageWrapper>
                  <img alt="my name im" src={bannerUrl} />
                </ImageWrapper>
              </a>
              <a href={url}>
                <EventSingleTitle>{title.text}</EventSingleTitle>
              </a>
              <EventMeta>
                {startDate} /{endDate}{" "}
              </EventMeta>

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
            </EventContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

EventComponent.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.shape({ text: PropTypes.string }),
    banner: PropTypes.shape({
      url: PropTypes.string,
      mediumpanoramic: PropTypes.shape({ url: PropTypes.string }),
    }),
    description: PropTypes.shape({ text: PropTypes.string }),
  }),
}

export default EventComponent
