import React from 'react'
import './etapas.css'

class Etapa3 extends React.Component {

  render() {
    return (
      <main>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <label>5. Por que você não terminou um curso de graduação?</label>
        <input type='text' />
        <label>6. Você fez algum curso complementar?</label> 
        <select>
          <option value ='' selected disabled>Escolha uma opção</option>
          <option value='nenhum'>Nenhum</option>
          <option value='tecnico'>Curso técnico</option>
          <option value='ingles'>Curso de inglês</option>
        </select>
        <button onClick={this.props.irParaEtapaFinal}>Próxima etapa</button>
      </main>
    )
  }
}

export default Etapa3