import React, { useEffect, useReducer, useState } from 'react';
import { getPokemon } from './endpoints';
import Pokemon from './Pokemon';

export function PokemonArray() {
  const [pkm, setPkm] = useState([]);
  for (let i = 1; i <= 898; i++) {
    const c_pokemon = Pokemon(`pokemon/${i}`);
    console.log(c_pokemon)
    const newPokemon = {
      id: i,
      nombre: `${c_pokemon.name}`,
      tipo: c_pokemon.types[0].type.name,
      imagen: c_pokemon.sprites.front_default,
    };
    setPkm([...pkm, newPokemon]);
  }
  console.log(pkm);
  return pkm;
}

export default PokemonArray;
