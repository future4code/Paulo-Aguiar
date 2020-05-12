numeros = [1, 2, 5, 8, 10, 11, 13, 15, 20]

const numerosMaioresQueDez = numeros.filter((numero, index, array) => {
    return numero > 10
})

const numerosPares = numeros.filter((numero, index, array) => {
    return numero % 2 === 0
})