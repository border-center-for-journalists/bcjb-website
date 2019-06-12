import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PageNumber = styled.a`
  flex: 0 1 auto;
  text-align: center;
  box-sizing: border-box;
  background-color: ${props => props.theme.Black};
  border: 2px solid ${props => props.theme.Black};
  color: ${props => props.theme.White};
  min-width: 15px;
  padding: 3px 8px;
  margin: 5px;
  text-decoration: none;
  &:hover {
    border: 2px solid ${props => props.theme.Yellow};
    background-color: ${props => props.theme.Yellow};
    color: ${props => props.theme.Black};
  }
  &.current {
    border: 2px solid ${props => props.theme.Yellow};
    background-color: transparent;
    color: ${props => props.theme.Black};
  }
`

export { PageWrapper, PageNumber }
