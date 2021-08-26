import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const PokeCard = (props) => {
  // valor do estado que guarda infos e foto do pokemon
  const [pokemon, setPokemon] = useState("");

  // método que roda após a montagem do componente
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, []);

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  useEffect(() => {
    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    if (pokemon !== props.pokemon) {
      pegaPokemon(props.pokemon);
    }
  }, [pokemon]);

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <h3>{pokemon.types[0].type.name}</h3>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;
