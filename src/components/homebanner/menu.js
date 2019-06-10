import React, { Component } from "react"
import { Menu, MenuItem, MenuSeparator } from "./index.styled"
import { Rows } from "../../theme/index.styled"

class MenuComponent extends Component {
  render() {
    return (
      <Menu>
        <Rows>
          {this.props.menu &&
            this.props.menu.map(item => (
              <MenuItem href={item.item_url.url}>
                {item.item_title.text}
              </MenuItem>
            ))}
        </Rows>
      </Menu>
    )
  }
}

export default MenuComponent
