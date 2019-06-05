import React, { Component } from "react"
import PropTypes from "prop-types"
import CalendarComponent from "./calendar"
import EventComponent from "./event"
import {
  Section,
  Container,
  Subtitle,
  Rows,
  Row,
} from "../../theme/index.styled"
import { DayTitle, EventTitle } from "./index.styled"

class CalendarContainer extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Subtitle>Junio 2019</Subtitle>
          <Rows>
            {this.props.events.map(event => <EventComponent event={event} />)}
          </Rows>
        </Container>
      </Section>
    )
  }
}

CalendarContainer.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.shape({ text: PropTypes.string }),
      banner: PropTypes.shape({
        url: PropTypes.string,
        medium: PropTypes.shape({ url: PropTypes.string }),
      }),
      location: PropTypes.string,
      eventStart: PropTypes.instanceOf(Date),
      eventEnd: PropTypes.instanceOf(Date),
    })
  ),
}

export default CalendarContainer
