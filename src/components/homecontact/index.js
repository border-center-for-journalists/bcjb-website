import React, { Component } from "react"
import { Section, Container, Title3, Rows, Row } from "../../theme/index.styled"
import { Form, Button } from "./index.styled"

class ContactComponent extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Title3>Contacto</Title3>
          <Rows align="space-between">
            <Row width="25%" />
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
                <textarea rows="6" />
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
