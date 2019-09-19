import React, { Component } from "react"
import PropTypes from "prop-types"
import { Banner, YellowBg, YellowItem, BannerContainer } from "./index.styled"
import { Rows } from "../../theme/index.styled"
import MenuComponent from "./menu"

class BannerComponent extends Component {
  render() {
    const { cover, title } = this.props.data
    const iconsClasses = [
      "icon-megafono",
      "icon-calendario",
      "icon-periodico",
      "icon-cursos",
    ]
    const { banners } = this.props
    const banner = {}
    if (banners.length > 0) {
      const r = Math.floor(Math.random() * (banners.length - 1))
      banner.url = banners[r].cover.url
    }
    return (
      <Banner fullHeight={this.props.fullHeight} bg={banner.url || cover.url}>
        <BannerContainer fullHeight={this.props.fullHeight}>
          <h1>{title.text}</h1>
          {this.props.menu && <MenuComponent menu={this.props.menu} />}
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

BannerComponent.propTypes = {
  cover: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  title: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
}

BannerComponent.defaultProps = {
  fullHeight: false,
  menu: false,
}

export default BannerComponent
