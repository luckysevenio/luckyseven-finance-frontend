import React, { useEffect, useState} from 'react';
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
`;

export function Pokemon() {
  useEffect(() => {
    setstate('chao')
    return;
  }, []);
  const [pokemon, setpokemon] = useState(null)
  const [state, setstate] = useState('hola')
  return (
    <StyledApp>
      <header className="flex">
        <h1>{state}</h1>
        <button onClick={getPokemon('1')}></button>
      </header>
    </StyledApp>
  );
}

export default Pokemon;
