
import React, { useEffect, useReducer, useState } from 'react'; 
import { getPokemon } from './endpoints';

export function Pokemon(url) {
  useEffect(() => {
    async function callPokemon() {
      const response = await getPokemon(url);
      setPokemon(response);
    }
    callPokemon();   
    return;
  });
  const [pokemon, setPokemon] = useState(null);
  return pokemon
}

export default Pokemon;
