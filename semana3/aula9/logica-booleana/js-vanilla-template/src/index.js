/*
1. 
a. false
b. false
c. false
d. true
e. boolean

2.
a. array é um tipo de variável do Javascript que serve 
  para guardar vetores, ou um grupo de itens, podendo ser números ou strings.
  Pode ser declarada colocando os itens que se deseja guardar entre colchetes. 
  Ex.: utilizando let nome-do-array = [].
b. 0
c. com a função length. Ex.: nome-do-array.length
d. I. undefined
   II. null
   III. 11
   IV. 3 e 4
   V. 19 e 9
   VI. 3
   VII. 2
   */

   let kelvin = 0;
   let fah = 0;
   let celsius = 0;
   console.log("1.")
   kelvin = (77 - 32)*5/9 + 273.15
   console.log("a. " + kelvin + " K")
   
   fah = 80*9/5 + 32
   console.log("b. " + fah + " °F")
   
   fah = 30*9/5 + 32
   kelvin = (fah - 32)*5/9 + 273.15
   console.log("c. " + fah + " °F" + " e " + kelvin + " K")
   
   celsius = prompt("insira o valor em graus celsius")
   fah = celsius*9/5 + 32
   kelvin = (fah - 32)*5/9 + 273.15
   console.log("d. " + fah + " °F" + " e " + kelvin + " K")
  
   console.log ("2.")
   let resposta;
   resposta = prompt("1. Qual música você está ouvindo no momento?")
   console.log("Resposta: " + resposta) 
   resposta = prompt("2. Qual último livro que você leu?")
   console.log("Resposta: " + resposta) 
   resposta = prompt("3. Qual o número do seu cartão de crédito?")
   console.log("Resposta: " + resposta) 
   resposta = prompt("4. Quais os três números do verso do seu cartão de crédito?")
   console.log("Resposta: " + resposta) 
   resposta = prompt("5. Quantos anos você tem?")
   console.log("Resposta: " + resposta) 

  console.log("3.")
  let kwH = 280;
  let conta = kwH * 0.05
  console.log("a. Sua conta deu: R$" + conta)
  let contaDesconto = conta - (conta*(15 / 100))
  console.log("b. Sua conta com o desconto vabagundo da prefeitura deu: R$" + contaDesconto)

  console.log("----------------------DESAFIOS---------------------")
  console.log("1.")
  let libra = 20
  let quilo = libra / 2.205
  console.log("a. 20lb equivalem a " + quilo + "Kg")

  let onça = 10.5
  quilo = onça / 35.274
  console.log("b. 10.5oz equivalem a " + quilo + "Kg")
 
  let milha = 100
  let metro = milha * 1609
  console.log("c. 100mi equivalem a " + metro + "m")
  
  let pes = 50
  metro = pes / 3.281
  console.log("d. 50ft equivalem a " + metro + "m")

  let galao = 103.56
  let litro = galao * 4.546
  console.log("e. 103.56gal equivalem a " + litro + "l")

  let xicara = 450
  litro = xicara / 4
  console.log("f. 450xic equivalem a " + litro + "l")

  milha = prompt("Insira o número de milhas para ser convertido em metros")
  metro = milha * 1609
  console.log("g. 100mi equivalem a " + metro + "m")