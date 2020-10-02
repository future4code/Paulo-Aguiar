import React from "react";
import CardPessoa from "./components/CardPessoa";

class App extends React.Component {
  state = {
    listaDePessoas: [
      {
        nome: "Goli",
        idade: 20
      },
      {
        nome: "Paulinha",
        idade: 20
      },
      {
        nome: "Darvas",
        idade: 10
      },
      {
        nome: "Severo",
        idade: 24
      },
      {
        nome: "Artur",
        idade: 40
      }
    ]
  };

  removePessoa = nomeParaRemover => {
    const novaListaDePessoa = this.state.listaDePessoas.filter(pessoa => {
      return pessoa.nome !== nomeParaRemover;
    });

    this.setState({
      listaDePessoas: novaListaDePessoa
    });
  };

  render() {
    const listaRenderizada = this.state.listaDePessoas.map(pessoa => {
      return (
        <div>
          <CardPessoa
            key={pessoa.nome}
            nomeProps={pessoa.nome}
            idadeProps={pessoa.idade}
          />
          <button
            onClick={() => {
              this.removePessoa(pessoa.nome);
            }}
          >
            Deletar
          </button>
        </div>
      );
    });

    return <div>{listaRenderizada}</div>;
  }
}

export default App;
