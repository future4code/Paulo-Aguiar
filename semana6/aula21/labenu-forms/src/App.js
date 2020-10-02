import React from 'react';
import DadosGerais from './components/DadosGerais'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'
import styled from 'styled-components'

const AppMain = styled.div `
  text-align: center;
  `

class App extends React.Component {
  state = {
    pagina: 1
  };

  onClickPróximaEtapa = () => {
    this.setState ({
      pagina: this.state.pagina + 1
    })
    console.log(this.state.pagina)
  }
  
  render() {
    return (
      <AppMain>
        {this.state.pagina === 1 && <DadosGerais irParaEtapa2={this.onClickPróximaEtapa}/>}
        {this.state.pagina === 2 && <Etapa2 irParaEtapa3={this.onClickPróximaEtapa} />}
        {this.state.pagina === 3 && <Etapa3 irParaEtapaFinal={this.onClickPróximaEtapa} />}
        {this.state.pagina === 4 && <EtapaFinal irParaEtapaFinal={this.onClickPróximaEtapa} />}
      </AppMain>
        )
      }
      
    
}

export default App;
