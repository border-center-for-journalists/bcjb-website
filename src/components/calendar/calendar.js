import React, { Component } from "react"
import { Rows, Row } from "../../theme/index.styled"
import { CalendarWrapper, Arrow, MonthWrapp, DayWrapp } from "./index.styled"

class CalendarComponent extends Component {
  render() {
    const month = []
    for (let i = 1; i < 31; i++) {
      month.push(<DayWrapp>{i}</DayWrapp>)
    }
    return (
      <CalendarWrapper>
        <Rows align="space-between">
          <Row>
            <Arrow direction="L">&lt;</Arrow> Junio{" "}
            <Arrow direction="R">&gt;</Arrow>
          </Row>
          <Row>
            <Arrow direction="L">&lt;</Arrow> 2019{" "}
            <Arrow direction="R">&gt;</Arrow>
          </Row>
        </Rows>
        <hr />
        <MonthWrapp>{month}</MonthWrapp>
      </CalendarWrapper>
    )
  }
}

export default CalendarComponent
