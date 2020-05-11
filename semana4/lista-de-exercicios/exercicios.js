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

// //3----------------------------------------------------------------------------
// //O código não funcionava pois a condicional while estava presa em um loop infinito.

// const quantidadeDeNumerosPares = 3
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

// //4--------------------------------------------------------------------------

// classificacaoDeTriangulos = (a, b, c) => {
//   if(a === b && b === c) {
//     return ('O triângulo é equilátero')
//   } else if(a === b && b != c) {
//     return ('O triângulo é isóceles')
//   } else if (a != b && a != c && b != c) {
//     return ('O triângulo é escaleno')
//   }
// }

// //5.-------------------------------------------------------------------------
// analisadorDeNumeros = (a, b) => {
//   let numeroMaior = 0;
//   let divisiveis = true;
//   let diferença = 0;
//   if(a > b) {
//     numeroMaior = a;
//     diferenca = a - b;
//   } else {
//     numeroMaior = b;
//     diferenca = b - a;
//   }
//   if(a % b === 0) {
//     divisiveis = `${a} é divisível por ${b}`;
//   } else {
//     divisiveis = `${a} não é divisível por ${b}`;
//   }
//   console.log(`O maior é ${numeroMaior}\n${divisiveis}\nA diferença entre eles é ${diferenca}`)
// }

// // funções===================================================================
// // 1.----------------------------------------------------------------------
// const ar = [4, 2, 3, 7, 10, 3];

// segundoMaiorEMenor = (array) => {
//   let segundoMaiorNumero = array.sort((a, b) => b-a)[1];
//   let segundoMenorNumero = array.sort((a, b) => a-b)[1];
//   console.log(`O segundo maior número é ${segundoMaiorNumero} e o segundo menor número é ${segundoMenorNumero}`)
// }

// segundoMaiorEMenor(ar)

// //2.------------------------------------------------------------------------
// const alerta = () => {
//   alert('Hello Future4')
// }

// alerta()

// //Objetos===================================================================
// //1.-----------------------------------------------------------------------
/* Arrays são um conjunto de elementos, podendo ser usados para guardar 
vários elementos dentro dele. Objetos são variáveis com mais de um parâmetro,
podemos usá-los para descrever um elemento com diversas características.*/

// //2.------------------------------------------------------------------------

// criaRetangulo = (lado1, lado2) => {
//   retangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2 * (lado1 + lado2),
//     area: lado1 * lado2
//   }
//   return retangulo
// }

// //3.-------------------------------------------------------------------------
// const filmeFavorito = {
//   titulo: 'Pulp Fiction',
//   ano: '1994',
//   diretor: 'Quentin Tarantino',
//   atores: ['Samuel L Jackson', ' Uma Thurman', ' Bruce Willis'],
// }
// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`) 

// //4.--------------------------------------------------------------------------
// const paulo = {
//   nome: 'Paulo Aguiar',
//   idade: 32,
//   email: 'paulopma@hotmail.com',
//   endereco: 'QS06, conjunto 610B, casa 20'
// } 

// anonimizarPessoa = (pessoa) => {
//   const pessoaAnonima = {
//     ...pessoa,
//     nome: 'ANONIMO'
//   }
//   return pessoaAnonima
// }

// // funções de array===========================================================
// //1------------------------------------------------------------------------------
// const array = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]
// //a.---------------------------------------------------------------------------
// pessoasDeMaior = (arrayPessoas) => {
//  return arrayPessoas.filter((pessoa) => pessoa.idade >= 20)
// }

// //b.-------------------------------------------------------------------------
//   idadeInferiorAVinte = (arrayPessoas) => {
//    return arrayPessoas.filter((pessoa) => pessoa.idade < 20)
//   }

// //2.-------------------------------------------------------------------------
// const array = [1, 2, 3, 4, 5, 6]
// //a.--------------------------------------------------------------------------
// multiplicaPorDois = (array) => {
//   return array.map((elemento) => elemento * 2)
// }

// //b.----------------------------------------------------------------------------
// multiplicaPorTresComStrings = (array) => {
//   const newArray = array.map((elemento) => elemento * 3)
//   return newArray.join(' ').split(' ')
// }

// //c.--------------------------------------------------------------------------
// parOuImpar = (array) => {
//   let newArray = [] 
//   array.forEach((elemento) => {
//     if(elemento % 2 === 0) {
//        newArray.push(`${elemento} é par`)
//     } else {
//       newArray.push(`${elemento} é impar`)
//     }
//   })
//   return newArray;
// }

// //3.---------------------------------------------------------------------------
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// //a.---------------------------------------------------------------------------

// pessoasPermetidas = (array) => {
//   return array.filter((pessoa) => pessoa.altura >= 1.5 && (pessoa.idade > 14 && pessoa.idade < 60))
// }

// //b.---------------------------------------------------------------------------
// pessoasNaoPermitidas = (array) => {
//   return array.filter((pessoa) => !(pessoa.altura >= 1.5 && (pessoa.idade > 14 && pessoa.idade < 60)))
// }

// //4.-------------------------------------------------------------------------
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// let pronome1 = ''
// let pronome2 = ''
// let emails = []
// email = (consultas) => {
//   consultas.forEach((pessoa) => {
//     if(pessoa.genero === 'masculino') {
//       pronome1 = 'Sr.'
//       pronome2 = 'lo'
//     } else {
//       pronome1 = 'Sra.'
//       pronome2 = 'la'
//     }
//     if(pessoa.cancelada === false) {
//       emails.push(`Olá, ${pronome1} ${pessoa.nome}. Estamos enviando esta mensagem para lembrá-${pronome2} da sua consulta no dia ${pessoa.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
//     } else { 
//       emails.push(`Olá, ${pronome1} ${pessoa.nome}. Infelizmente, sua consulta marcada para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`)
//     }
//   })
//   console.log(emails)
//   return emails
// }
// email(consultas)

// //5.---------------------------------------------------------------------------
/* infelizmente demorei muito tempo nessa questão e o único jeito que consegui
resolver foi utilizando reduce, que ainda não nos foi ensinado. */

// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]
// let totalCompras = 0
// atualizaSaldo = (contasClientes) => {
//   contasClientes.forEach((conta) => {
//     if(conta.compras.length != 0) {
//       totalCompras = conta.compras.reduce((a, b) => a+b)
//     } else {
//       totalCompras = 0
//     }
//     conta.saldoTotal -= totalCompras
//   })
//   return contasClientes
// }