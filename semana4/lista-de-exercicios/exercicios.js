/*interpretação de código=======================================================
1.----------------------------------------------------------------------------
O código transforma dólar em real, ele tem uma função que recebe o valor em 
dólares e multiplica pela cotação do dólar, que é inserida através do navegador.
Saída: R$ 575

2.-----------------------------------------------------------------------------
O código faz uma previsão de quanto dinheiro o usuário terá, se fizer algum tipo
de investimento. O tipo de investimento e o valor são recebidos por uma função
que multiplica o valor investido dependendo do tipo de investimento.
Se for colocado um tipo de investimento que não faz parte do código, um alerta
é exibido para o usuário.
Saída: 165; undefined

3.-------------------------------------------------------------------------------- 
O código itera sobre um array de números e separa os números desse array original
em dois outro arrays, dependendo se o número é par ou ímpar.
Saída: 14; 6; 8

4.------------------------------------------------------------------------------ 
O código determina, através das variáveis numero1 e numero2, respectivamente,
qual o menor e o maior número do array números. Ele faz isso iterando sobre o
array e dando duas condicionais.
Saída: -10; 1590 */

// //Lógica de programação======================================================
// //1.----------------------------------------------------------------------- 
// //for, forEach e map

// const array = [1, 3, 6, 2, 5, 3, 10, 200, 14]
// for(item of array) {
//   console.log(item*2)
// }

// array.forEach((item) => { console.log(item*2)})

// array.map((item) => {console.log(item*2)})

//2.---------------------------------------------------------------------------
//a)false
//b)true
//c)true
//d)true 
//e)true

//3----------------------------------------------------------------------------
//O código não funcionava pois a condicional while estava presa em um loop infinito.

const quantidadeDeNumerosPares = 3
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}