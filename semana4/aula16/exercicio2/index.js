const pokemons = [
    { nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 1000 },
    { nome: "Squirtle", tipo: "agua", vida: 0, vidaMaxima: 2000 },
    { nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 3000 }
]

pokemons.forEach((pokemon, idx, arr) => {
    pokemon.vida = pokemon.vidaMaxima
})