function rastreiaEvento(evento) {
  console.log(evento)
}

function rastreiaClique(evento) {
  console.log('Cliquei no input', evento.target)
}

let somaDasLetras = "";
function rastreiaTecla(evento) {
  somaDasLetras += evento.key;
  let mostraTextoDigitado = document.getElementById('mostra-digitado');
  mostraTextoDigitado.innerHTML = '<p>' + somaDasLetras + '</p>>';
  console.log(somaDasLetras)
}
