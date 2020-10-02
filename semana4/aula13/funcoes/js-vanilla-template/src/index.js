/*
1.----------------------------------------------------------------
a. o array continuará vazio
b. [0, 1, 0, 1, 2, 3]
c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

2.
a. 
0
2
3
b. Funcionaria, pois o código consegue comparar a igualdade de strings ou números

3.---------------------------------------------------------------
A função devolve um array de dois elementos, sendo o primeiro a soma dos 
elementos do array recebido e o segundo, a multiplicação dos elementos.
Eu daria o nome de multiplicacaoESoma */

// //4.--------------------------------------------------------------
// //a.--------------------------------------------------------------
// function anosDeCao(anos) {
//   let idadeCanina = anos*7

//   return idadeCanina
// }
// anosDeCao(2)

// //b.------------------------------------------------------------
// function dadosPessoais (nome, idade, endereco, estudante) {
//   let estudanteSN = null
//   if (estudante) {
//   estudanteSN = "sou estudante"
//   } else { estudanteSN = "não sou estudante"}
//   let cadastro = "Eu sou " + nome + ", tenho " + idade + " anos," + " moro em "
//   + endereco + " e " + estudanteSN
//   console.log(cadastro)
//   return cadastro
// }
// dadosPessoais("Paulo", 32, "QS 06 conjunto 610B casa 20", true)

// //5.-----------------------------------------------------------------

// function qualOSeculo(ano) {
//   const seculos = ["X", "XI", "XII", "XIII", "XIV", "XV", "XVI", 
//   "XVII", "XVIII", "XIV", "XX", "XXI"]
//   let seculoNumerico = 0;
//   let seculoRomano = ""
//   if(ano % 100 === 0) {
//     seculoNumerico = (ano / 100) - 10
//   } else { 
//     seculoNumerico = Math.floor(((ano / 100) + 1) - 10) 
//   }
//   seculoRomano = seculos[seculoNumerico]
//   console.log("O ano " + ano + " pertence ao século " + seculoRomano)
//   return "O ano " + ano + " pertence ao século " + seculoRomano
// }

// qualOSeculo(1501)

// //6.--------------------------------------------------------------------
// //a.---------------------------------------------------------------------
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function quantidadeDeElementos(lista) {
//   console.log(lista.length)
//   return lista.length
// }
// quantidadeDeElementos(array)

// //b.----------------------------------------------------------------------
// const numero = 11

// function parOuNem(numero) {
//   let ePar = null    
//   if(numero % 2 === 0) {
//     ePar = true
//   } else {
//     ePar = false
//   }
//   console.log(ePar)
//   return ePar
// }
// parOuNem(numero)

// //c.--------------------------------------------------------------------
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function paresDaLista(lista) {
//   let listaPares = []
//   for(item of lista) {
//     if(item % 2 === 0) {
//       listaPares.push(item)
//     }
//   }
//   console.log(listaPares)
//   return listaPares    
// }
// paresDaLista(array)

// //d.-----------------------------------------------------------------------
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function parOuNem(numero) {
//   let ePar = null    
//   if(numero % 2 === 0) {
//     ePar = true
//   } else {
//     ePar = false
//   }
//   return ePar
// }

// function paresDaLista(lista) {
//   let listaPares = []
//   for(item of lista) {
//     if(parOuNem(item)) {
//       listaPares.push(item)
//     }
//   }
//   console.log(listaPares.length)
//   return listaPares.length
// }
// paresDaLista(array)