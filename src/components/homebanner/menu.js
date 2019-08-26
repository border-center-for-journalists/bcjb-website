import React, { Component } from "react"
import { Menu, MenuItem, MenuSeparator } from "./index.styled"
import { Rows } from "../../theme/index.styled"

import { Context } from "../../languages/context"

const MenuComponent = ({ menu }) => (
  <Context.Consumer>
    {({ lang, texts }) => {
      return (
        <Menu>
          <Rows>
            {menu &&
              menu.map(item => (
                <MenuItem href={item.item_url.url}>
                  {item.item_title.text}
                </MenuItem>
              ))}
          </Rows>
        </Menu>
      )
    }}
  </Context.Consumer>
)

export default MenuComponent
