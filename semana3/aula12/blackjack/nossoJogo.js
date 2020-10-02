/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    let carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//  console.log("Bem vindo ao jogo de Blackjack!")
//  let cartaUsario1 = 0
//  let cartaUsario2 = 0
//  let valorUsario = 0
//  let cartaComputador1 = 0
//  let cartaComputador2 = 0
//  let valorComputador = 0
//  if(confirm("Quer iniciar uma nova rodada?")) {
//    cartaUsario1 = comprarCarta()
//    cartaUsario2 = comprarCarta()
//    cartaComputador1 = comprarCarta()
//    cartaComputador2 = comprarCarta()
//    valorUsario = cartaUsario1.valor + cartaUsario2.valor
//    valorComputador = cartaComputador1.valor + cartaComputador2.valor

//    console.log("Usuário - Cartas: " + cartaUsario1.texto,cartaUsario2.texto + " - Pontuação: " + valorUsario)
//    console.log("Computador - Cartas: " + cartaComputador1.texto,cartaComputador2.texto + " - Pontuação: " + valorComputador)
//    if(valorUsario > valorComputador) {
//       console.log("O usuário ganhou!")
//    } else if(valorComputador > valorUsario) {
//       console.log("O computador ganhou!")
//    } else {
//       console.log("Empate!")
//    }
//  } else {
//     console.log("O jogo acabou")
//  }