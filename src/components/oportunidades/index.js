import React, { Component } from "react"
import { Section, Container, TextContainer, Rows, Row } from "../../theme/index.styled"
import { Button, Buttons, Select, Restext } from "./index.styled"
import Box from './box';
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
            opportunities.map((opportunity)=>(
              <Box key={opportunity.uid} lang={lang} langCode={lang.lang} {...opportunity}/>
            ))
          }
        </Container>
      </Section>
    )
  }
}

export default OportunidadComponent
