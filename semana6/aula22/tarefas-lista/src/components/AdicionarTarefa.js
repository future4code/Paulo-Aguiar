import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  margin: 10px;
`


class AdicionarTarefa extends React.Component {
  
  render() {
    return (
      <main>  
        <Input 
          onChange={this.props.onChangeTarefa} 
          value={this.props.inputTarefa}
          placeholder={'Próxima tarefa :)'}
          type='text' 
        />
        <button onClick={this.props.onClickTarefa}>Adicionar</button>
      </main>
    )
  }
}

export default AdicionarTarefa;