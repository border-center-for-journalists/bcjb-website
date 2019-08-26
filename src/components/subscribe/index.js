/* eslint-disable */
import React, { Component } from "react"
import { Rows } from "../../theme/index.styled"
import {
  TitleMediumContainer,
  FormBody,
  YellowBody,
  CustomRow,
  XContainer,
} from "./index.styled"

/*
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
<!-- Begin Mailchimp Signup Form -->
                
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	 Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. 
       </style>
*/

class SubscribeComponent extends Component {
  render() {
    return (
      <YellowBody>
        <TitleMediumContainer color={true}>
          <h3>{this.props.lang === "es" ? "Suscríbete" : "Subscribe"}</h3>
          <FormBody color id="mc_embed_signup">
            <form
              action="https://bordercenter.us20.list-manage.com/subscribe/post?u=7e8c52a85a62c87db4816ca56&amp;id=d871cf9a52"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              novalidate
            >
              <Rows align="space-between" wrap id="mc_embed_signup_scroll">
                <CustomRow width="48%" className="mc-field-group">
                  <label for="mce-FNAME">
                    {this.props.lang === "es" ? "Nombre" : "First Name"}{" "}
                  </label>
                  <input
                    type="text"
                    value=""
                    name="FNAME"
                    className=""
                    id="mce-FNAME"
                  />
                </CustomRow>
                <CustomRow width="48%" className="mc-field-group">
                  <label for="mce-LNAME">
                    {this.props.lang === "es" ? "Apellido" : "Last Name"}{" "}
                  </label>
                  <input
                    type="text"
                    value=""
                    name="LNAME"
                    className=""
                    id="mce-LNAME"
                  />
                </CustomRow>
                <CustomRow width="48%" className="mc-field-group">
                  <label for="mce-EMAIL">
                    Email <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    value=""
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </CustomRow>
                <div
                  className="mc-field-group size1of2"
                  style={{ display: "none" }}
                >
                  <label for="mce-BIRTHDAY-month">Birthday </label>
                  <div className="datefield">
                    <span className="subfield monthfield">
                      <input
                        className="birthday "
                        type="text"
                        pattern="[0-9]*"
                        value=""
                        placeholder="MM"
                        size="2"
                        maxlength="2"
                        name="BIRTHDAY[month]"
                        id="mce-BIRTHDAY-month"
                      />
                    </span>{" "}
                    /
                    <span className="subfield dayfield">
                      <input
                        className="birthday "
                        type="text"
                        pattern="[0-9]*"
                        value=""
                        placeholder="DD"
                        size="2"
                        maxlength="2"
                        name="BIRTHDAY[day]"
                        id="mce-BIRTHDAY-day"
                      />
                    </span>
                    <span className="small-meta nowrap">( mm / dd )</span>
                  </div>
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_7e8c52a85a62c87db4816ca56_d871cf9a52"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <CustomRow width="48%" className="clear">
                  <input
                    type="submit"
                    value={this.props.lang === "es" ? "Enviar" : "Send"}
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </CustomRow>
              </Rows>
            </form>
          </FormBody>
          {/*<FormBody color={true}>
            <Rows>
              <CustomRow>
                <p>Nombre</p>
                <input type="text" name="name" />
              </CustomRow>
              <CustomRow>
                <p>Mail</p>
                <input type="email" name="email" />
              </CustomRow>
              <CustomRow>
                <button name="Submit">Enviar</button>
              </CustomRow>
            </Rows>
    </FormBody>*/}
        </TitleMediumContainer>
      </YellowBody>
    )
  }
}
export default SubscribeComponent
