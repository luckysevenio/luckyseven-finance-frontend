import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPokemon } from '../utils/endpoints';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
    color: green;
  }

  h2 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
    color: red;
  }
`;

export function Pokemon() {
  useEffect(() => {
    async function callPokemon() {
      const response = await getPokemon(1);
      setPokemon(response);
    }
    callPokemon();
    return;
  }, []);
  const [pokemon, setPokemon] = useState(null);
  return (
    <StyledApp>
      <header className="flex">
        <h1>{pokemon?.name}</h1>
        <h1>{pokemon?.name}</h1>
        <h1>{pokemon?.name}</h1>
      </header>
    </StyledApp>
  );
}

export default Pokemon;
