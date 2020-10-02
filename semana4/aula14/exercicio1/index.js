// const container = document.getElementById("main-container")

// container.innerHTML += "<p class='texto-azul'>Texto</p>"
// container.innerHTML += "<p class='texto-azul'>Texto</p>"
// container.innerHTML += "<p class='texto-azul'>Texto</p>"
// container.innerHTML += "<p class='texto-azul'>Texto</p>"
// container.innerHTML += "<p class='texto-azul'>Texto</p>"
// container.innerHTML += "<p class='texto-azul'>Texto</p>"

function adicionaTexto(quantidade) {
    const div = document.getElementById("main-container")

    for(let i = 0; i < quantidade; i++) {
        div.innerHTML += "<p class='texto-azul'> Texto " + i + "</p>"
        // div.innerHTML += `<p class='texto-azul'> Texto ${i}</p>`
    }   
}

adicionaTexto(5)