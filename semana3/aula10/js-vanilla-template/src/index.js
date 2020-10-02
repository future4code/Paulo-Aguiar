/*
1. O código testa se um número, inserido pelo usuário é par ou 
   ímpar. Imprime "Passou no teste" se for par e "Não passou no teste"
   se for ímpar.

2.
a. O código serve para mostrar o preço de cada fruta.
b. O preço da fruta é R$ 2.25
c. R$ 14.55
d. O preço da fruta é R$ 10.5

3.
O terminal dirá que a variável mensagem não foi definida, pois o console.log
está tentando acessar uma variável que só existe dentro do escopo do if
e o mesmo está fora.
*/

// //---------------EXERCÍCIO 4-----------------
// //a.---------------------
// const numero1 = (prompt("Digite o primeiro número"))
// const numero2 = (prompt("Digite o segundo número"))

// if (numero1 > numero2) {
//   console.log (numero1 + ", " + numero2)
// } else {
//   console.log (numero2 + ", " + numero1)
// }
// //No teste, os dois números iguais foram impressos normalmente

// //b.----------------
// const numero1 = (prompt("Digite o primeiro número"))
// const numero2 = (prompt("Digite o segundo número"))
// const numero3 = (prompt("Digite o terceiro número"))

// if (numero1 > numero2 && numero2 > numero3) {
//   console.log (numero1 + ", " + numero2 + ", " + numero3)
// } else if (numero1 > numero3 && numero3 > numero2) {
//   console.log (numero1 + ", " + numero3 + ", " + numero2)
// } else if (numero2 > numero1 && numero1 > numero3) {
//   console.log (numero2 + ", " + numero1 + ", " + numero3)
// } else if (numero2 > numero3 && numero3 > numero1) {
//   console.log (numero2 + ", " + numero3 + ", " + numero1)
// } else if (numero3 > numero1 && numero1 > numero2) {
//   console.log (numero3 + ", " + numero1 + ", " + numero2)
// } else if (numero3 > numero2 && numero2 > numero1) {
//   console.log (numero3 + ", " + numero2 + ", " + numero1)
// }
// //No teste, nenhum número foi impresso

// //c.-------------------------
// const numero1 = (prompt("Digite o primeiro número"))
// const numero2 = (prompt("Digite o segundo número"))
// const numero3 = (prompt("Digite o terceiro número"))

// if (numero1 > numero2 && numero2 > numero3) {
//   console.log (numero1 + ", " + numero2 + ", " + numero3)
// } else if (numero1 > numero3 && numero3 > numero2) {
//   console.log (numero1 + ", " + numero3 + ", " + numero2)
// } else if (numero2 > numero1 && numero1 > numero3) {
//   console.log (numero2 + ", " + numero1 + ", " + numero3)
// } else if (numero2 > numero3 && numero3 > numero1) {
//   console.log (numero2 + ", " + numero3 + ", " + numero1)
// } else if (numero3 > numero1 && numero1 > numero2) {
//   console.log (numero3 + ", " + numero1 + ", " + numero2)
// } else if (numero3 > numero2 && numero2 > numero1) {
//   console.log (numero3 + ", " + numero2 + ", " + numero1)
// } else if (numero1 === numero2 && numero1 === numero3) {
//   console.log ("Não digite os três números iguais")
// } else {
//   console.log ("Não digite números iguais")
// }

//----------------------EXERCÍCIO 5-----------------------------------
//a. https://drive.google.com/open?id=1yz85w1mGv3PRD1w3YF6l2_dEo9ezzrdw
//b.--------------------------------------------
const vertebrado = prompt("O animal possui ossos? (responda s/n)")

if (vertebrado === "s") {
  const pelos = prompt("O animal possui pelos? (responda s/n)")
  if (pelos === "s") {
    const racional = prompt("O animal pode ser considerado racional? (responda s/n)")
    if (racional === "s") {
      console.log ("O animal é um ser humano")
    } 
    if (racional === "n") {
      console.log("O animal é um mamífero não humano")
    }  
  } 
  if (pelos === "n") {
    const penas = prompt("O animal possui penas? (responda s/n)")
    if(penas === "s") {
      console.log("O animal é uma ave")
    } 
    if(penas === "n") {
      const terrestre = prompt("O animal é terrestre? (responda s/n)")
      if(terrestre === "s") {
        const viveuAquatico = prompt("O animal já viveu em ambiente aquático? (responda s/n)")
        if (viveuAquatico === "s") {
          console.log("O animal é um anfíbio")
        } 
        if (viveuAquatico === "n") {
          console.log("O animal é um réptil")
        }
      } 
      if (terrestre === "n") {
          console.log("O animal é um peixe")
      }
    }
  }   
} else {console.log ("O animal é um invertebrado")}
