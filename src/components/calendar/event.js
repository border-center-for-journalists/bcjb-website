import React, { Component } from "react"
import { Rows, Row } from "../../theme/index.styled"
import {
  EventSingleTitle,
  EventSingleTitleMarquer,
  EventContent,
  ImageWrapper,
} from "./index.styled"

import img from "../../theme/images/calendar.png"

class EventComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <ImageWrapper>
          <img alt="my name im" src={img} />
        </ImageWrapper>
        <Rows>
          <Row>
            <EventSingleTitleMarquer />
          </Row>
          <Row>
            <EventSingleTitle>Conferencia de prensa</EventSingleTitle>
            <EventContent>
              <p>
                Labore et dolore magna aliqua. Ut enim ad minim veniam rud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo.
              </p>
            </EventContent>
          </Row>
        </Rows>
      </React.Fragment>
    )
  }
}

export default EventComponent
