/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")
 let cartasUsarioAr = []
 let valorUsario = 0
 let cartasComputadorAr = []
 let valorComputador = 0
 let nc = 1
 let mostrarCartasPc = []
 let cartasComputador = 0
 if(confirm("Quer iniciar uma nova rodada?")) {
   for(let i = 0; i < 2; i++) {
      let cartasUsario = comprarCarta()
      cartasUsarioAr += cartasUsario.texto + " "
      cartasComputador = comprarCarta()
      cartasComputadorAr += cartasComputador.texto + " "
      valorUsario += Number(cartasUsario.valor)
      valorComputador += Number(cartasComputador.valor)
   }   
   
   mostrarCartasPc = cartasComputadorAr.slice(0, 3)
   
 while(confirm("Suas cartas são: " + cartasUsarioAr 
 + ". A carta revelada do computador é: " 
 + mostrarCartasPc + "\n" + "Deseja mais uma carta?") 
 && valorUsario < 21 && valorComputador < 21) {
   let cartasUsario = comprarCarta()
   cartasUsarioAr += cartasUsario.texto + " "
   valorUsario += Number(cartasUsario.valor)
   mostrarCartasPc += cartasComputador.texto + " "    
   if(valorComputador <= valorUsario && valorComputador < 21 && valorUsario < 21) {
      cartasComputador = comprarCarta()
      cartasComputadorAr += cartasComputador.texto + " "
      valorComputador += Number(cartasComputador.valor)
   }
 }

 while(valorComputador <= valorUsario && valorComputador < 21 && valorUsario <= 21) {
   cartasComputador = comprarCarta()
   cartasComputadorAr += cartasComputador.texto + " "
   valorComputador += Number(cartasComputador.valor)
 }
 
 console.log("Usuário - Cartas: " + cartasUsarioAr + " - Pontuação: " + valorUsario)
 console.log("Computador - Cartas: " + cartasComputadorAr + " - Pontuação: " + valorComputador)
 if((valorUsario > valorComputador && valorUsario <= 21) || valorComputador > 21) {
   alert("Suas cartas são: " + cartasUsarioAr + ". Sua pontuação é " + valorUsario 
   + "\n" + "As cartas do computador são: " + cartasComputadorAr + ". A pontuação do computador é " + valorComputador
   + "\n" + "Você ganhou!")
   console.log("O usuário ganhou!")
 } else {
 alert("Suas cartas são: " + cartasUsarioAr + ". Sua pontuação é " + valorUsario 
 + "\n" + "As cartas do computador são: " + cartasComputadorAr + ". A pontuação do computador é " + valorComputador
 + "\n" + "O computador ganhou!")
 console.log("O computador ganhou!")
 } 
 if (valorComputador === valorUsario) {
 alert("Suas cartas são: " + cartasUsarioAr + ". Sua pontuação é " + valorUsario 
 + "\n" + "As cartas do computador são: " + cartasComputadorAr + ". A pontuação do computador é " + valorComputador
 + "\n" + "Deu empate!")
 console.log("Empate!")
 }
 } else {
    console.log("O jogo acabou")
 }

