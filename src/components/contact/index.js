import React, { Component } from "react"
import PropTypes from "prop-types"
import { Section, Container, Title3, Rows, Row } from "../../theme/index.styled"
import { Form, Button, ContactItem } from "./index.styled"

import { Context } from "../../languages/context"

class ContactComponent extends Component {
  render() {
    return (
      <Context.Consumer>
        {({ texts }) => {
          return (
            <Section>
              <Container>
                <Title3>{this.props.data.title.text}</Title3>
                <Rows align="space-between">
                  <Row width="35%">
                    <ContactItem>
                      <i className="icon-correo" />
                      <p>
                        <span>
                          <b>{texts.email}:</b>
                        </span>
                        <span>
                          <a href="mailto:info@border.com">info@border.com</a>
                        </span>
                      </p>
                    </ContactItem>
                    <ContactItem>
                      <i className="icon-ubicacion" />
                      <p>
                        <span>
                          <b>{texts.address}:</b>
                        </span>
                        <span>
                          Beniam rud exercitation ullamco laboris nisi ut
                          aliquip
                        </span>
                      </p>
                    </ContactItem>
                    <ContactItem>
                      <i className="icon-telefono" />
                      <p>
                        <span>
                          <b>{texts.phone}:</b>
                        </span>
                        <span>
                          <a href="tel:+55 0 68 79 87">+55 0 68 79 87</a>
                        </span>
                      </p>
                    </ContactItem>
                  </Row>
                  <Row width="50%">
                    <Form>
                      <Rows align="space-between">
                        <Row width="47%">
                          <label>{texts.name}</label>
                          <input name="name" type="text" />
                        </Row>
                        <Row width="47%">
                          <label>{texts.email}</label>
                          <input name="email" type="text" />
                        </Row>
                      </Rows>
                      <label>{texts.message}</label>
                      <textarea rows="5" />
                      <Rows align="flex-end">
                        <Button>{texts.send}</Button>
                      </Rows>
                    </Form>
                  </Row>
                </Rows>
              </Container>
            </Section>
          )
        }}
      </Context.Consumer>
    )
  }
}

ContactComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.shape({
      text: PropTypes.string,
    }),
  }),
}

export default ContactComponent
