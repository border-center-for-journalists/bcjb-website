import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PageNumber = styled.a`
  flex: 1 0 auto;
  text-align: center;
  box-sizing: border-box;
  background-color: ${props => props.theme.Black};
  border: 1px solid ${props => props.theme.Black};
  color: ${props => props.theme.White};
  min-width: 15px;
  height: 15px;
  padding: 3px 5px;
  margin: 5px;
  &.current {
    border: 1px solid ${props => props.theme.Yellow};
  }
`

export { PageWrapper, PageNumber }
