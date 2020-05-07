const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0 },
    { nome: "Bellsprout", tipo: "grama", vida: 0 },
    { nome: "Charmander", tipo: "fogo", vida: 0 },
    { nome: "Vulpix", tipo: "fogo", vida: 0 },
    { nome: "Squirtle", tipo: "água", vida: 0 },
    { nome: "Psyduck", tipo: "água", vida: 0 }
]

const soPokemonsDeGrama = pokemons.filter((pokemon, index, array) => {
    return pokemon.tipo === 'grama'
})

// const nomesDosPokemonsGrama = soPokemonsDeGrama.map((pokemon) => {
//     return pokemon.nome
// })

const pokemonsDeFogoEAgua = pokemons.filter((pokemon, index, array) => {
    if (pokemon.tipo === "água" || pokemon.tipo ==='fogo'){
        return true
    }
    return false
})