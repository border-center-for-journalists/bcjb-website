import styled from "styled-components"

const Box = styled.div`
  background-color: black;
  padding: 50px;
  box-sizing: border-box;
  margin-top: 70px;
  color: ${props => props.theme.DarkGray};
  h1 {
    font-size: 48px;
    margin: 10px 0;
  }
  h2 {
    font-size: 35px;
    font-weight: 300;
    margin: 10px 0;
  }
`

const Dot = styled.i`
  display: inline-block;
  margin: 10px 10px 10px 0;
  width: 10px;
  height: 10px;
  background-color: ${props => props.color};
  border-radius: 50%;
`

export { Box, Dot }
