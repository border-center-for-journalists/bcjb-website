import React, { Component } from "react"
import { Section, Container, TextContainer,Rows, Row } from "../../theme/index.styled"
import { Box, Button, Buttons, Select, Restext } from "./index.styled"
import tempImg from "../../theme/images/about.png"

class OportunidadComponent extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Buttons>
            <Button color="Yellow" >Periodistas</Button>
            <Button >Organizaciones</Button>
            
            <Select>
              <p>Mostrar: </p>
              <select>
                <option value="todos" selected>Todos</option>
                <option value="cursos">Cursos</option>
                <option value="talleres">Talleres</option>
                <option value="becas">Becas</option>
                <option value="paneles">Páneles</option>
              </select>
            </Select>
            
          </Buttons>
        </Container>
        <Container>

          <Restext>Se muestran resultados para <strong>periodistas</strong> tipo <strong>talleres</strong></Restext>

          <Box>
            <img src={tempImg} alt="tempImg" />
            <div className="grad"></div>
            <div className="topHolder">
              <div className="topBar">
                <div className="col1">
                  <span className="tipo">Tipo: Taller</span>
                  <span >Audiencia: Periodistas</span>
                </div>
                <div className="col2">
                  <p>Beca</p>
                </div>
              </div>
              <h2>Nombre abore et dolore magna aliqua.<br/> Ut enim ad minim veniam equis.</h2>
            </div>
            
            <div className="bottomBar">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien nunc, auctor ac leo ut, porta blandit lacus. 
                Nunc nunc enim, semper nec tellus nec, pharetra pellentesque neque. Nunc gravida tempus sapien, quis tincidunt massa dignissim sit amet. 
                Mauris vulputate, mauris et tincidunt luctus, nulla dui lacinia purus, quis mattis mi felis pharetra risus.</p>
            </div>
          </Box>


          <Box>
            <img src={tempImg} alt="tempImg" />
            <div className="grad"></div>
            <div className="topHolder">
              <div className="topBar">
                <div className="col1">
                  <span className="tipo">Tipo: Taller</span>
                  <span >Audiencia: Periodistas</span>
                </div>
                <div className="col2">
                  <p></p>
                </div>
              </div>
              <h2>Nombre abore et dolore magna aliqua.<br/> Ut enim ad minim veniam equis.</h2>
            </div>
            
            <div className="bottomBar">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien nunc, auctor ac leo ut, porta blandit lacus. 
                Nunc nunc enim, semper nec tellus nec, pharetra pellentesque neque. Nunc gravida tempus sapien, quis tincidunt massa dignissim sit amet. 
                Mauris vulputate, mauris et tincidunt luctus, nulla dui lacinia purus, quis mattis mi felis pharetra risus.</p>
            </div>
          </Box>


          <Box>
            <img src={tempImg} alt="tempImg" />
            <div className="grad"></div>
            <div className="topHolder">
              <div className="topBar">
                <div className="col1">
                  <span className="tipo">Tipo: Taller</span>
                  <span >Audiencia: Periodistas</span>
                </div>
                <div className="col2">
                  <p></p>
                </div>
              </div>
              <h2>Nombre abore et dolore magna aliqua.<br/> Ut enim ad minim veniam equis.</h2>
            </div>
            
            <div className="bottomBar">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien nunc, auctor ac leo ut, porta blandit lacus. 
                Nunc nunc enim, semper nec tellus nec, pharetra pellentesque neque. Nunc gravida tempus sapien, quis tincidunt massa dignissim sit amet. 
                Mauris vulputate, mauris et tincidunt luctus, nulla dui lacinia purus, quis mattis mi felis pharetra risus.</p>
            </div>
          </Box>


          <Box>
            <img src={tempImg} alt="tempImg" />
            <div className="grad"></div>
            <div className="topHolder">
              <div className="topBar">
                <div className="col1">
                  <span className="tipo">Tipo: Taller</span>
                  <span >Audiencia: Periodistas</span>
                </div>
                <div className="col2">
                  <p></p>
                </div>
              </div>
              <h2>Nombre abore et dolore magna aliqua.<br/> Ut enim ad minim veniam equis.</h2>
            </div>
            
            <div className="bottomBar">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sapien nunc, auctor ac leo ut, porta blandit lacus. 
                Nunc nunc enim, semper nec tellus nec, pharetra pellentesque neque. Nunc gravida tempus sapien, quis tincidunt massa dignissim sit amet. 
                Mauris vulputate, mauris et tincidunt luctus, nulla dui lacinia purus, quis mattis mi felis pharetra risus.</p>
            </div>
          </Box>




        </Container>
      </Section>
    )
  }
}

export default OportunidadComponent
