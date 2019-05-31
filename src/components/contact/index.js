import React, { Component } from "react"
import { Section, Container, Title3, Rows, Row } from "../../theme/index.styled"
import { Form, Button, ContactItem } from "./index.styled"

class ContactComponent extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title3>Contacto</Title3>
          <Rows align="space-between">
            <Row width="35%">
              <ContactItem>
                <i className="icon-correo" />
                <p>
                  <span>
                    <b>Email:</b>
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
                    <b>Dirección:</b>
                  </span>
                  <span>
                    Beniam rud exercitation ullamco laboris nisi ut aliquip
                  </span>
                </p>
              </ContactItem>
              <ContactItem>
                <i className="icon-telefono" />
                <p>
                  <span>
                    <b>Teléfono:</b>
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
                    <label>Nombre</label>
                    <input name="name" type="text" />
                  </Row>
                  <Row width="47%">
                    <label>Email</label>
                    <input name="email" type="text" />
                  </Row>
                </Rows>
                <label>Mensaje</label>
                <textarea rows="5" />
                <Rows align="flex-end">
                  <Button>Enviar</Button>
                </Rows>
              </Form>
            </Row>
          </Rows>
        </Container>
      </Section>
    )
  }
}

export default ContactComponent
