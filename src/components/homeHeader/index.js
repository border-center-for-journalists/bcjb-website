import React, { Component } from "react"
import { Banner, BannerContainer, BannerImg } from "./index.styled"
import {
  AuthorContainer,
  Author,
  PublicationDate,
  Title,
  YellowBg,
  YellowItem,
  Rows,
} from "../../theme/index.styled"
import { SPECIAL_NEWS_URL, NEWS_URL } from '../../utils/constants'

import moment from "moment"
import "moment/locale/es"

moment.locale("es")

class HomeHeaderComponent extends Component {
  getAuthor(notice) {
    return notice.data.author.length > 0 ? notice.data.author[0].name[0].text : ""
  }
  getDate(notice) {
    return moment(notice.data.custom_publishdate).format("MMMM DD [|] YYYY")
  }
  render() {
    const notice = this.props.bannerNotice
    const urlSectionType = (notice.type === 'noticias_especiales') ? SPECIAL_NEWS_URL : NEWS_URL
    const banner = notice.data.banner.url ? notice.data.banner.url : ""
    const iconsClasses = [
      "icon-megafono",
      "icon-calendario",
      "icon-periodico",
      "icon-cursos",
    ];
    return (
      <Banner>
        <BannerImg  bg={banner} />
        <BannerContainer fullHeight={false}>

          <div>
            <Title>
              <a href={`https://borderhub.org/${urlSectionType}/${notice.uid}/`}>{notice.data.title[0].text}</a>
            </Title>

            <p>{notice.data.excerpt[0].text}</p>
            <AuthorContainer>

              <Author>
                Por <b> {this.getAuthor(notice)}</b>
              </Author>
              <br />
              <PublicationDate>{this.getDate(notice)}</PublicationDate>
            </AuthorContainer>
          </div>
        </BannerContainer>

        {this.props.submenu && (
          <YellowBg>
            <Rows keepRow>
              {this.props.submenu.map((item, i) => {
                let iconClass = iconsClasses[i]
                return (
                  <YellowItem href={item.item_url.url}>
                    <i className={iconClass} />
                    <span>{item.item_title.text}</span>
                  </YellowItem>
                )
              })}
            </Rows>
          </YellowBg>
        )}
      </Banner>
    )
  }
}

export default HomeHeaderComponent
