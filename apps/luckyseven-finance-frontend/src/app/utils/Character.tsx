
import React, { useEffect, useReducer, useState } from 'react'; 
import { getCharacter } from './endpoints';

export function Character(url) {
  useEffect(() => {
    async function callCharacter() {
      const response = await getCharacter(url);
      setCharacter(response);
    }
    callCharacter();   
    return;
  });
  const [character, setCharacter] = useState(null);
  return character
}

export default Character;
