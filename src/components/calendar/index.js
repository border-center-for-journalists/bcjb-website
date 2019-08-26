import React, { Component } from "react"
import PropTypes from "prop-types"
import EventComponent from "./event"
import { Section, Container, Subtitle, Rows } from "../../theme/index.styled"
import PaginationComponent from "../pagination/index"
import moment from "moment"
import "moment/locale/es"

class CalendarContainer extends Component {
  divideEvents = () =>
    this.props.events.reduce((data, event) => {
      const { eventStart } = event
      const k = moment(eventStart).format("MMMM YYYY")
      if (data[k]) data[k].events.push(event)
      else data[k] = { label: k, events: [event] }
      return data
    }, {})

  render() {
    moment.locale(this.props.lang)
    //const events = this.divideEvents()
    return (
      <Section>
        <Container>
          {/*<Subtitle>Junio 2019</Subtitle>*/}
          <br />
          <br />
          <Rows wrap>
            {this.props.events.map(event => (
              <EventComponent lang={this.props.lang} event={event} />
            ))}
          </Rows>
          <PaginationComponent
            lang={this.props.pageContext.lang}
            section={this.props.section}
            totalPages={this.props.pageContext.totalPages}
            currentPage={this.props.pageContext.currentPage}
          />
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
