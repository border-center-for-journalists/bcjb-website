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

import img from "../../theme/images/calendar.png"

moment.locale("es")

class EventComponent extends Component {
  render() {
    const {
      title,
      banner,
      content,
      location,
      eventStart,
      eventEnd,
      uid,
    } = this.props.event
    const bannerUrl = banner.mediumpanoramic
      ? banner.mediumpanoramic.url
      : banner.url

    const startDate = moment(eventStart).format("DD [de] MMMM h:mm a")
    const endDate = moment(eventEnd).format("h:mm a")
    const url = `/events/${uid}`
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
          <EventLocation>
            <i className="icon-ubicacion" />
            {"  "}
            {location}
          </EventLocation>
          <p>{content.text.slice(0, 200)}... </p>
        </EventContent>
      </EventContainer>
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
  }),
}

export default EventComponent
