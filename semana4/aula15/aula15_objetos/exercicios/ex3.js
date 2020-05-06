function aoClicarNoBotao(evento) {
  escreveNoHtml();
}

function aoApertarEnter(event) {
  if(event.key === 'Enter') {
    escreveNoHtml()
  } else {
    console.log('A tecla clicada não é Enter')
  }
}

function escreveNoHtml() {
  const meuTexto = document.getElementById('meu-input');
  if(meuTexto.value.includes('.jpeg') || meuTexto.value.includes('.png') || meuTexto.value.includes('.jpg')) {
    const textoDigitadoNatela = document.getElementById('mostra-digitado');
    textoDigitadoNatela.innerHTML += "<img src='" + meuTexto.value + "'>";
    meuTexto.value = ''
  } else {
    alert('Insira uma imagem válida')
  }
}
