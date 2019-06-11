import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { formatMenuItems } from "../../services/utils"
import { Context } from "../../languages/context"

const MenuTemplate = ({ menuItems }) => {
  if (!menuItems) {
    return <ul />
  }
  const items = formatMenuItems(menuItems)
  return (
    <ul>
      {items &&
        items.map(item => (
          <li>
            <a href={item.item_url.url}>{item.item_title.text}</a>
          </li>
        ))}
    </ul>
  )
}

const MenuLangContainer = data => {
  const menuEdgeSpanish = data.allPrismicMenu.edges.find(
    e => e.node.lang === "es-mx"
  )
  const menuEdgeEnglish = data.allPrismicMenu.edges.find(
    e => e.node.lang === "en-us"
  )

  return (
    <Context.Consumer>
      {({ lang }) => (
        <MenuTemplate
          menuItems={
            lang === "es"
              ? menuEdgeSpanish.node.data.menu_main
              : menuEdgeEnglish.node.data.menu_main
          }
        />
      )}
    </Context.Consumer>
  )
}

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      query MainMenuQuery {
        allPrismicMenu(filter: { uid: { eq: "bc_menu" } }) {
          edges {
            node {
              uid
              lang
              data {
                menu_main {
                  item_url {
                    url
                  }
                  item_title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={MenuLangContainer}
  />
)

export { MainMenu }
