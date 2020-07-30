import React, { Component } from "react"
import PropTypes from "prop-types"
import moment from "moment"
import "moment/locale/es"
import {
  EventSingleTitle,
  EventContent,
  ImageWrapper,
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
      description,
      location,
      uid,
    } = this.props.event
    const bannerUrl = banner.mediumpanoramic
      ? banner.mediumpanoramic.url
      : banner.url
    // const startDate = lang === "es" ? moment(eventStart).format('DD [de] MMMM, YYYY') : moment(eventStart).format('MMMM DD[,] YYYY');
    // const endDate = lang === "es" ? moment(eventEnd).format('DD [de] MMMM, YYYY') : moment(eventEnd).format('MMMM DD[,] YYYY');
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
                  <p>{description.text}... </p>
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
