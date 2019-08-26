import React, { Component } from "react"
import {
  TallerItem,
  TallerTexts,
  TallerImage,
  TallerImageContainer,
} from "./index.styled"
import { Paragraph, AbsoluteLink, Capitalized } from "../../theme/index.styled"
import { Context } from "../../languages/context"

import moment from "moment"
import "moment/locale/es"

class TallerComponent extends Component {
  render() {
    moment.locale(this.props.lang)
    const {
      title,
      banner,
      description,
      event_start,
    } = this.props.data.node.data
    const startDate = moment(event_start).format("MMMM DD [|] YYYY")
    const startTime = moment(event_start).format("h:mm a")

    return (
      <Context.Consumer>
        {({ lang }) => {
          const url = `/${lang}/events/${this.props.data.node.uid}`

          return (
            <TallerItem>
              <TallerTexts>
                <h3>
                  <a href={url}>{title.text}</a>
                </h3>
                <Paragraph>
                  {description.text.slice(0, 100)}{" "}
                  {description.text.length > 100 ? "..." : ""}
                </Paragraph>
              </TallerTexts>
              <TallerImageContainer>
                <TallerImage>
                  <AbsoluteLink href={url} />
                  <img alt={title.text} src={banner.medium.url} />

                  <div>
                    <i class="icon-calendario" />
                    <Capitalized>
                      <span>{startDate}</span>
                    </Capitalized>
                    <span>
                      <b>{startTime}</b>
                    </span>
                  </div>
                </TallerImage>
              </TallerImageContainer>
            </TallerItem>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default TallerComponent
