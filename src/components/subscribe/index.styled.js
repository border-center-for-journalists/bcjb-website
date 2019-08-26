import styled from "styled-components"
import { Section, Row, Container } from "../../theme/index.styled"

const YellowBody = styled(Section)`
  width: 100%;
  background-color: ${props => props.theme.Yellow};
  padding: 0 1em;
`
const CustomRow = styled(Row)`
  ${props => props.theme.mediumBreakPoint} {
    width: 100%;
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }

  ${props => props.theme.smallBreakPoint} {
    button {
      width: 100%;
    }
  }
`

const XContainer = styled(Container)`
  max-width: 950px;
  button {
    font-size: 35px;
    float: right;
    padding-top: 20px;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  button:focus {
    outline: transparent;
  }
`

const TitleMediumContainer = styled(Container)`
  padding: 1.5em 0 0.1em;

  h3 {
    padding-bottom: 15px;
    margin-bottom: 15px;
    color: ${props => (props.color ? props.theme.Black : props.theme.White)};
    border-bottom: 3px solid;
    border-color: ${props =>
      props.color ? props.theme.Black : props.theme.Yellow};
  }

  ${props => props.theme.ipadBreakPoint} {
    margin: 0 auto;
  }
`

const FormBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  form {
    width: 100%;
    margin-bottom: 40px;
  }
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    height: 40px;
    background-color: ${props =>
      props.color ? props.theme.Yellow : props.theme.White};
    border: 1px solid ${props => props.theme.Black};
    margin-right: 2em;
  }
  textarea {
    background-color: ${props =>
      props.color ? props.theme.Yellow : props.theme.White};
    border: 1px solid ${props => props.theme.Black};
    margin-right: 2em;
  }
  label,
  p {
    display: block;
    margin: 0;
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.56;
    color: ${props => props.theme.Black};
  }

  input[type="submit"],
  button {
    width: 100%;
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    display: block;
    margin: 32px auto 0;
    font-size: 19.5px;
    line-height: 1.2;
    font-weight: bold;
  }
`

export { YellowBody, CustomRow, XContainer, TitleMediumContainer, FormBody }
