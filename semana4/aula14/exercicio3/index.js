function adicionarItem() {
    const input = document.querySelector("input")
    
    const novoItem = input.value
    
    if(novoItem === ""){
        alert("Insira um item!!!")
    } else {
        const listaDeCompras = document.querySelector("ul")

        listaDeCompras.innerHTML += "<li>" + novoItem + "</li>"
    
        input.value = ""
    }
}