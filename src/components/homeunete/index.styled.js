import styled from "styled-components"
import { Section } from "../../theme/index.styled"
import img from "../../theme/images/fotoperiodistas.png"

const UneteSection = styled(Section)`
  margin-top: 80px;
  background-image: url(${img});
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Title = styled.h3`
  width: 95%;
  max-width: 450px;
  padding: 10px 0;
  border-bottom: 4px solid ${props => props.theme.Yellow};
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin: 20px 0;
`

const Subtitle = styled.h4`
  max-width: 480px;
  font-size: 19px;
  font-weight: bold;
  margin: 10px 0;
  color: white;
`

const Paragraph = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: white;
  max-width: 480px;
`

export { UneteSection, Title, Subtitle, Paragraph }
