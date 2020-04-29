/* 
1. 14

2. 
a. Adiciona os valores de item ao array novaLista
b. [10, 15, 25, 30]
c. [12, 18, 21, 27, 30]; [12]
---------------------------------------DESAFIO--------------------------------------------------
1. 0
*/

//----------------------------------EXERCÍCIO 3-------------------------------------------------
// //a.----------------------------------------------------------------

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let maiorNumero = 0
// let menorNumero = 0
// for(let i=0; i < array.length; i++) {
//   if(array[i] > maiorNumero) {
//     maiorNumero = array[i]
//     maiorNumero2 = maiorNumero
//   }
//   if(array[i] < maiorNumero2) {
//     maiorNumero2 = array[i]
//     menorNumero = array[i]
//   }
// }
// console.log("O maior número é",maiorNumero,"e o menor é",menorNumero)

// //b.----------------------------------------------------------------------
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let array2 = []
// for(let item of array) {
//   array2.push(item / 10)
// }
// console.log(array2)

// //c.-------------------------------------------------------------------------
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let array2 = []
// for (let item of array) {
//   if(item % 2 === 0) {
//     array2.push(item)
//   }
// }
// console.log(array2)

// //d.-----------------------------------------------------------------------------
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let array2 = []
// for(let i=0; i < array.length; i++) {
//   array2.push("O elemento do índex " + i + " é " + array[i])
// }
// console.log(array2)

// //------------------------------------------DESAFIO 2-----------------------------------
// let numeroMagico = prompt("Digite um número e deixe o trouxa do player 2 tentar acertar")
// console.log("Vamos jogar!")
// let tentativa = prompt("Escolha um número e veja se você dá sorte!!!")
// let tentativas = 0;
// while (tentativa !== numeroMagico) {
//   if(tentativa > numeroMagico) {
//     console.log("O número chutado foi: " + tentativa)
//     console.log(tentativa + " é maior do que o seu número da sorte, tente outra vez")
//     tentativas++
//     tentativa = prompt("Escolha outro número e veja se você dá sorte, agora vai!!!")
//   }
//   if(tentativa < numeroMagico) {
//     console.log("O número chutado foi: " + tentativa)
//     console.log(tentativa + " é menor do que o seu número da sorte, não desista!")
//     tentativas++
//     tentativa = prompt("Escolha outro número e veja se você dá sorte, agora vai!!!")
//   }
// } 
// console.log("Acertou! Você venceu :)")
// tentativas++
// console.log("O seu número de tentativas foi: " + tentativas)
// //---------------------------------------DESAFIO 3---------------------------------
// let numeroMagico = Math.round(Math.random()*10)
// console.log(numeroMagico)
// console.log("Vamos jogar!")
// let tentativa = Number(prompt("Escolha um número e veja se você dá sorte!!!"))
// let tentativas = 0;
// while (tentativa !== numeroMagico) {
//   if(tentativa > numeroMagico) {
//     console.log("O número chutado foi: " + tentativa)
//     console.log(tentativa + " é maior do que o seu número da sorte, tente outra vez")
//     tentativas++
//     tentativa = Number(prompt("Escolha outro número e veja se você dá sorte, agora vai!!!"))
//   }
//   if(tentativa < numeroMagico) {
//     console.log("O número chutado foi: " + tentativa)
//     console.log(tentativa + " é menor do que o seu número da sorte, não desista!")
//     tentativas++
//     tentativa = Number(prompt("Escolha outro número e veja se você dá sorte, agora vai!!!"))
//   }
// } 
// console.log("Acertou! Você venceu :)")
// tentativas++
// console.log("O seu número de tentativas foi: " + tentativas)

/*o Chrome dava um erro ao acertar o número randômico e eu demorei muito tempo
pra conseguir achar o erro. O erro era que ele tava comparando um número 
(provindo do Math.random) com uma string (provinda do prompt). Esse erro não deu
da primeira vez pois ele comparava string com string (prompt com prompt).
Então a dificuldade foi um tanto grande. */