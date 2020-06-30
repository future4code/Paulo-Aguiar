import React, {useState, useEffect} from "react";
import axios from "axios";

function PokeCard (props) {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []) 

  useEffect(() => {
    if (pokemon !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, [props.pokemon])

  // componentDidUpdate(prevProps) {
  //   // aqui, é feita uma verificação da props anterior com a props atual.
  //   // Caso a props anterior seja diferente da props atual,
  //   // a função pegaPokemon é chamada.
  //   if (prevProps.pokemon !== this.props.pokemon) {
  //     this.pegaPokemon(this.props.pokemon);
  //   }
  // }

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const pokemon = pokemon
  {console.log(props.pokemon)}
  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;