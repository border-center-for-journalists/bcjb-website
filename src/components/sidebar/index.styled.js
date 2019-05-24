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
  padding: ${props => (props.bigger ? "10px" : "14px")} 0;
  font-size: ${props => (props.bigger ? "18px" : "14px")};
`
const Hamburguer = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  border: 0 none;
  background: black;
  width: 79px;
  height: 79px;
  i {
    display: block;
    top: 0px;
    left: 10px;
    width: 25px;
    height: 0px;
    border-bottom: 3px solid white;
    position: relative;
    border-radius: 10px;
    transition: all 0.2s;
    &:before {
      content: "";
      position: absolute;
      top: -12px;
      left: 0;
      width: 37px;
      border-top: 3px solid white;
      border-radius: 10px;
      transition: all 0.5s;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 37px;
      border-top: 3px solid white;
      border-radius: 10px;
      transition: all 0.5s;
    }
  }
  &.open {
    i {
      width: 0;
      &:before {
        transform: rotate(45deg);
        transform-origin: left top 0;
        left: 9px;
      }
      &:after {
        transform: rotate(-45deg);
        transform-origin: left top 0;
        bottom: -17px;
        left: 6px;
      }
    }
  }
`

export { Sidebar, Social, Hamburguer }
