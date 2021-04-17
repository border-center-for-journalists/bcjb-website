import React, { Component } from "react"
import { Section, Container, TextContainer, Rows, Row } from "../../theme/index.styled"
import { Box, Button, Buttons, Select, Restext } from "./index.styled"
import tempImg from "../../theme/images/about.png"
class OportunidadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAudience: 'periodistas',
      selectedType: 'todos',
      opportunities: this.props.data,
    }
    this.changeAudience = this.changeAudience.bind(this);
    this.changeType = this.changeType.bind(this)
    this.filterPosts = this.filterPosts.bind(this)
  }
  componentDidMount() {
    this.filterPosts();
  }
  changeAudience(value) {
    this.setState({ selectedAudience: value }, () => this.filterPosts())
  }
  changeType(e) {
    this.setState({ selectedType: e.target.value }, () => this.filterPosts())
  }
  filterPosts() {
    const {
      selectedAudience,
      selectedType,
    } = this.state;
    const { data: opportunities } = this.props;
    const filteredPosts = opportunities.filter((opportunity) => {
      if (selectedType === 'todos') {
        return opportunity.audiencia == selectedAudience
      }
      return opportunity.audiencia == selectedAudience && opportunity.tipo == selectedType
    })
    this.setState({ opportunities: filteredPosts })
  }
  render() {
    const {
      selectedAudience,
      selectedType,
      opportunities
    } = this.state;
    const {
      lang
    } = this.props;
    return (
      <Section>
        <Container>
          <Buttons>
            <Button
              onClick={() => this.changeAudience('periodistas')}
              color={selectedAudience == 'periodistas' ? "Yellow" : ''}
            >
              {lang.texts.journalists}
            </Button>
            <Button
              onClick={() => this.changeAudience('organizaciones')}
              color={selectedAudience == 'organizaciones' ? "Yellow" : ''}
            >
              {lang.texts.organizations}

            </Button>

            <Select>
              <p>Mostrar: </p>
              <select onChange={this.changeType} value={selectedType}>
                <option value="todos" defaultValue>{lang.texts.all}</option>
                <option value="curso">{lang.texts.courses}</option>
                <option value="taller">{lang.texts.retails}</option>
                <option value="beca">{lang.texts.becas}</option>
                <option value="panel">{lang.texts.panels}</option>
              </select>
            </Select>

          </Buttons>
        </Container>
        <Container>

          <Restext>{lang.texts.showingResultsFor} <strong>{selectedAudience}</strong> {lang.texts.showingType}: <strong>{selectedType}</strong></Restext>
          {
            opportunities.map(({
              audiencia,
              descripcion_corta,
              imagen_de_fondo,
              tipo,
              titulo,
              uid
            })=>(
              <Box key={uid}>
                <img src={imagen_de_fondo.url || tempImg} alt="tempImg" />
                <div className="grad"></div>
                <div className="topHolder">
                  <div className="topBar">
                    <div className="col1">
                      <span className="tipo">{lang.texts.type}: {tipo}</span>
                      <span >{lang.texts.audience}: {audiencia}</span>
                    </div>
                    <div className="col2">
                      <p></p>
                    </div>
                  </div>
                  <h2>{titulo.text}</h2>
                </div>
                
                <div className="bottomBar">
                  <p>{descripcion_corta.text}</p>
                </div>
              </Box>
            ))
          }
        </Container>
      </Section>
    )
  }
}

export default OportunidadComponent
