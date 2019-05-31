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
        <br />
        <br />
        <br />
        <Container>
          <Subtitle>Calendario</Subtitle>
          <Rows>
            <CalendarComponent />
            <Row width="47%">
              <DayTitle>Viernes 29 de Mayo</DayTitle>
              <EventTitle>Conferencia de prensa</EventTitle>
            </Row>
          </Rows>
        </Container>
        <Container>
          <EventComponent />
        </Container>
      </Section>
    )
  }
}

export default CalendarContainer
