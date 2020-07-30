import React from "react"
import { Menu, MenuItem } from "./index.styled"
import { Rows } from "../../theme/index.styled"

const MenuComponent = ({ menu }) => (
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

export default MenuComponent
