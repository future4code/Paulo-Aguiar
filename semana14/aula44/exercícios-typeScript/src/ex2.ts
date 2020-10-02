// a. entrada: 'numeros'; saída: 'estatísticas'
function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort(
      (a, b) => a - b
  )

  let soma = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}
// b. numerosOrdenados: number[]; soma: number; num: number; 
// c. 
type amostraDeDados = {
  numeros: number;
  obterEstatisticas: (numeros: number) => number
}