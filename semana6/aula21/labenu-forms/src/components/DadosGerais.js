import React from 'react';
import './etapas.css'

class DadosGerais extends React.Component {

  render() {
    return (
      <main>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <label>1. Qual seu nome?</label>
        <input type='text'/>
        <label>2. Qual sua idade?</label>
        <input type='text'/>
        <label>3. Qual seu e-mail?</label>
        <input type='text'/>
        <label>4. Qual sua escolaridade?</label>
        <select>
          <option value='' selected disabled>Escolha uma das opções abaixo</option>
          <option value='ensinoMedioIncompleto'>Ensino médio incompleto</option>
          <option value='ensinoMedioCompleto'>Ensino médio completo</option>
          <option value='ensinoSuperiorIncompleto'>Ensino Superior incompleto</option>
          <option value='ensinoSuperiorCompleto'>Ensino Superior completo</option>
        </select>
        <button onClick={this.props.irParaEtapa2}>Próxima etapa</button>
      </main>
    )
  }
}
export default DadosGerais;
