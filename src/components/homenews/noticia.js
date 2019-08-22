import React, { Component } from "react"
import {
  NoticiaItem,
  NoticiaTexts,
  NoticiaImage,
  NoticiaImageContainer,
} from "./index.styled"
import { Paragraph, AbsoluteLink, Capitalized } from "../../theme/index.styled"
import { Context } from "../../languages/context"
import imageDefault from "../../theme/images/fotoperiodistas.png"

import moment from "moment"
import "moment/locale/es"

class NoticiaComponent extends Component {
  render() {
    moment.locale(this.props.lang)
    const {
      title,
      banner,
      excerpt,
      custom_publication_date,
    } = this.props.data.node.data
    const startDate = moment(custom_publication_date).format("MMMM DD [|] YYYY")
    const startTime = moment(custom_publication_date).format("h:mm a")

    return (
      <Context.Consumer>
        {({ lang }) => {
          const url = `/${lang}/blog/${this.props.data.node.uid}`
          let image = banner.medium.url ? banner.medium.url : imageDefault

          return (
            <NoticiaItem>
              <NoticiaTexts>
                <h3>
                  <a href={url}>{title.text}</a>
                </h3>
                <h4>
                  {startDate} {startTime}
                </h4>
                <Paragraph>
                  {excerpt.text.slice(0, 100)}{" "}
                  {excerpt.text.length > 100 ? "..." : ""}
                </Paragraph>
              </NoticiaTexts>
              <NoticiaImageContainer>
                <NoticiaImage>
                  <AbsoluteLink href={url} />
                  <img alt={title.text} src={image} />
                </NoticiaImage>
              </NoticiaImageContainer>
            </NoticiaItem>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default NoticiaComponent
