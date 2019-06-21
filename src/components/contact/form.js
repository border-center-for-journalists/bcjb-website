import React from "react"
import { Form } from "./index.styled"
import { Context } from "../../languages/context"
import { StaticQuery, graphql } from "gatsby"

const ContactForm = ({ render }) => (
  <StaticQuery
    query={graphql`
      query ContactConfigQuery {
        allPrismicMenu(filter: { uid: { eq: "bc_menu" } }) {
          edges {
            node {
              uid
              lang
              data {
                email_to
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Context.Consumer>
        {({ lang }) => {
          const langWithCode = lang === "es" ? "es-mx" : "en-us"
          console.log("data", data)
          const emailTo = data.allPrismicMenu.edges.find(
            e => e.node.lang === langWithCode
          ).node.data.email_to
          return render({ emailTo })
        }}
      </Context.Consumer>
    )}
  />
)

export default ContactForm
