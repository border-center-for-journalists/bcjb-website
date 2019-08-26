import React, { Component } from "react"
import PropTypes from "prop-types"
import { Section, Container, Title3, Rows, Row } from "../../theme/index.styled"
import { Form, Button, ContactItem, PopupContent } from "./index.styled"
import ContactForm from "./form"
import Popup from "reactjs-popup"
import queryString from "query-string"
import { Context } from "../../languages/context"

class ContactComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openConfirm: false,
    }

    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    const showConfirm =
      queryString.parse(this.props.location.search).success === "ok"
    this.setState({ openConfirm: showConfirm })
  }

  closeModal() {
    this.setState({ openConfirm: false })
  }

  render() {
    const returnUrlBase = this.props.location.origin
    return (
      <Context.Consumer>
        {({ texts }) => {
          return (
            <Section>
              <Popup
                open={this.state.openConfirm}
                closeOnDocumentClick
                onClose={this.closeModal}
              >
                <Context.Consumer>
                  {({ texts }) => (
                    <PopupContent>
                      <h2>{texts.thanksForSendingYourMessage}</h2>
                      <button onClick={this.closeModal}>Ok</button>
                    </PopupContent>
                  )}
                </Context.Consumer>
              </Popup>
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
                    <ContactForm
                      render={({ emailTo, lang }) => (
                        <Form
                          action={`https://formspree.io/${emailTo}`}
                          method="POST"
                        >
                          <input
                            type="hidden"
                            name="_next"
                            value={`${returnUrlBase}/${lang}/contact?success=ok`}
                          />
                          <input type="hidden" name="_language" value={lang} />
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
                          <textarea name="content" rows="5" />
                          <Rows align="flex-end">
                            <Button>{texts.send}</Button>
                          </Rows>
                        </Form>
                      )}
                    />
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
