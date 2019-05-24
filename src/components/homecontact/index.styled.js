import styled from "styled-components"

const Form = styled.form`
  label {
    width: 100%;
    display: block;
    margin: 10px 0;
    font-size: 12px;
  }
  textarea,
  input {
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 15px;
  }
`

const Button = styled.button`
  background: ${props => props.theme.Black};
  color: white;
  padding: 10px 20px;
  min-width: 200px;
  font-size: 19px;
  border: 1px solid ${props => props.theme.Black};
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${props => props.theme.Black};
  }
`

const ContactItem = styled.div`
  display: flex;
  padding: 15px 0;
  i {
    flex: 0 1 auto;
    font-size: 40px;
    margin-right: 17px;
  }
  p {
    margin: 0;
    font-size: 17px;
    line-height: 1.47;
    font-weight: 300;
    span {
      display: block;
    }
  }
`

export { Form, Button, ContactItem }
