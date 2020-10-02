let cliquesNoBotao = 0

function aoClicarNoBotao() {
    cliquesNoBotao++

    const p = document.getElementById("contador-de-cliques")
    p.innerHTML = "Cliques no botão: " + cliquesNoBotao
}