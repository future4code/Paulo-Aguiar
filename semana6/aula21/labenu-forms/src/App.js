import React from 'react';
import DadosGerais from './components/DadosGerais'
import Etapa2 from './components/Etapa2'
import styled from 'styled-components'

const AppMain = styled.div `
  text-align: center;
  `

class App extends React.Component {
  state = {
    dadosGerais: true,
    etapa2: false
  };

  onClickEtapa2 = () => {
    this.setState = ({
      // etapa2: !this.state.etapa2, 
      dadosGerais: !this.state.dadosGerais
    })
  }

  render() {
    if(this.state.dadosGerais) {
      return (
      <AppMain>
        <DadosGerais irParaEtapa2={this.onClickEtapa2}/>
      </AppMain>
      )
    } else {
      return (
      <AppMain>
        <Etapa2/>
      </AppMain>
      )
    }
      
    
  }
}

export default App;
