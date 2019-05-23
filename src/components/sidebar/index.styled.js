import styled from "styled-components"

const Sidebar = styled.div`
  position: fixed;
  width: 79px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.Gray};
`

const Social = styled.a`
  position: relative;
  display: inline-block;
  background-color: ${props => props.theme.Black};
  color: ${props => props.theme.Yellow};
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 50%;
  text-align: center;
  box-sizing: border-box;
  margin: 5px 0;
  padding: 14px 0;
  font-size: 14px;
`

export { Sidebar, Social }
