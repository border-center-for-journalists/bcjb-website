import React, { Component } from "react"
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
          <Subtitle>Mayo 2019</Subtitle>
          <Rows>
            <EventComponent />
            <EventComponent />
          </Rows>
        </Container>
        <Container>
          <Subtitle>Junio 2019</Subtitle>
          <Rows>
            <EventComponent />
            <EventComponent />
          </Rows>
        </Container>
      </Section>
    )
  }
}

export default CalendarContainer
