function aoClicarNoBotao(evento) {
  escreveNoHtml();
}

function aoApertarEnter(event) {
  if(event.key === 'Enter') {
    console.log(event.target);
    //nessa caso podemos substituir o const meuTexto = document.getElementById('meu-input') pelo event.target, pois os dois estão acessando o elemento input;
    const meuTexto = event.target;
    const textoDigitadoNatela = document.getElementById('mostra-digitado');
    textoDigitadoNatela.innerHTML += '<p>' + meuTexto.value + '</p>';
    meuTexto.value = ''
    // escreveNoHtml()
  } else {
    console.log('A tecla clicada não é Enter')
  }
}

//função para centralizar a lógica de escrever no html
function escreveNoHtml() {
  const meuTexto = document.getElementById('meu-input');
  const textoDigitadoNatela = document.getElementById('mostra-digitado');
  textoDigitadoNatela.innerHTML += '<p>' + meuTexto.value + '</p>';
  meuTexto.value = ''
}
