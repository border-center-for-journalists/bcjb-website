import React, { Component } from "react"
import { Rows, Row } from "../../theme/index.styled"
import {
  EventSingleTitle,
  EventSingleTitleMarquer,
  EventContent,
  EventContainer,
  ImageWrapper,
  EventMeta,
  EventLocation,
} from "./index.styled"

import img from "../../theme/images/calendar.png"

class EventComponent extends Component {
  render() {
    return (
      <EventContainer>
        <ImageWrapper>
          <img alt="my name im" src={img} />
        </ImageWrapper>
        <EventSingleTitle>Conferencia de prensa</EventSingleTitle>
        <EventMeta>03 de Mayo / 1:00 p.m. - 5:30p.m.</EventMeta>

        <EventContent>
          <EventLocation>
            <i className="icon-ubicacion" />
            {"  "}Palacio Nacional
          </EventLocation>
          <p>
            Labore et dolore magna aliqua. Ut enim ad minim veniam rud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo.
          </p>
        </EventContent>
      </EventContainer>
    )
  }
}

export default EventComponent
