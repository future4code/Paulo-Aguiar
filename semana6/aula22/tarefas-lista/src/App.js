import React from 'react';
import styled from 'styled-components'
import AdicionarTarefa from './components/AdicionarTarefa'

const AppMain = styled.div `
  text-align: center;
`

class App extends React.Component {
  state = {
    tarefas: '',
  }
  
  onClickAddTarefa = () => {
    const novaTarefa = this.state.tarefas
    this.setState ({tarefas: novaTarefa})
    console.log(this.state.tarefas)
  };

  onChangeAddTarefa = (event) => {
    this.setState ({tarefas: event.target.inputTarefa})
  }

  render() {
    return (
      <AppMain>
        <h1>Lista de tarefas</h1>
        <AdicionarTarefa 
          onChangeTarefa={this.onChangeAddTarefa}
          onClickTarefa={this.onClickAddTarefa}
          inputTarefa={this.state.tarefas}
        />
        <div>
          olá
          <p>{this.state.tarefas}</p>
        </div>
      </AppMain>
    )
  };
}

export default App;
