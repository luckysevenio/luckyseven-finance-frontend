import React from 'react';
import Bootstrap from 'bootstrap';
import Pokemon from '../utils/Pokemon';
import Mayus from '../utils/Mayus';
import PokemonArray from '../utils/PokemonArray';

function Carta() {
  const pkm = PokemonArray();
  console.log(pkm);
  
  return (
    <div>
      {/* {Pokemones?.results.map((pkm) => (
        <div className="card" style={{ width: '18rem', color: Pokemon("pokemon-species/"+pkm.name).color.name}} >
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h2>{pkm.url.split('/')[6]}</h2>
            <h1 key={pkm.url.split('/')[6]}>{Mayus(pkm.name)}</h1>
            <p className="card-text">Soy un Pokemon</p>
          </div>
        </div>
      ))} */}
    </div>
  );
}
export default Carta;
