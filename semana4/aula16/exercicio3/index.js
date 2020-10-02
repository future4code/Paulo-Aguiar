const numeros = [10, 20, 25, 7, 30]

let strings = numeros.map((numero, index, array) => {
    return `O elemento ${index} é ${numero}`
})