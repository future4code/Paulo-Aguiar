import React from 'react'
import './etapas.css'

class Etapa2 extends React.Component {

  render() {
    return (
      <main>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <label>5. Qual curso?</label>
        <input type='text' />
        <label>6. Qual a unidade de ensino?</label>
        <input type='text' />
        <button onClick={this.props.irParaEtapa3}>Próxima etapa</button>
      </main>
    )
  }
}

export default Etapa2;