function numerosPares(numero) {
  let contador = 0
  for(let i=0; i <= numero; i++) {
    if(i % 2 === 0) {
      contador++
    }
  }
  console.log(contador)
  return contador
}
numerosPares(10)