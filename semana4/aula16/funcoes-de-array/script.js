const despesaValor = document.getElementById('despesa-valor')
const despesaTipo = document.getElementById('despesa-tipo')
const despesaDescricao = document.getElementById('despesa-descricao')
const pesquisaTipo = document.getElementById('pesquisa-valor')
const pesquisaValorMaximo = document.getElementById('pesquisa-maximo')
const pesquisaValorMinimo = document.getElementById('pesquisa-minimo')
let resultadosPesquisa = document.getElementById('resultados-pesquisa')
let todasAsDespesas = []


cadastrarDespesa = () => {
  const despesa = {
    valor: despesaValor.value,
    tipo: despesaTipo.value,
    descricao: despesaDescricao.value
  }

  todasAsDespesas.push(despesa)
  console.log(todasAsDespesas)

  resultadosPesquisa.innerHTML += 
  `<p>Valor: ${todasAsDespesas.map((despesa) => despesa.valor)} </p>`
  return todasAsDespesas
}


filtrar = () => {
  const filtro = todasAsDespesas.filter((x) => {
    return x.valor < pesquisaValorMaximo.value && despesaValor > pesquisaValorMinimo.value
  })
  // resultadosPesquisa.innerHTML = 
  // `<p>Valor: ${filtro[0].valor} </p>`
  console.log(filtro)
}
