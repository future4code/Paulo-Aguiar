function verificaSeImpar(numero, funcao2) {
    if (numero % 2 === 1) {
        funcao2() // imprimeNoConsole()
    }
}

const imprimeNoConsole = () => {
    console.log("É ímpar")
}

verificaSeImpar(13, imprimeNoConsole)