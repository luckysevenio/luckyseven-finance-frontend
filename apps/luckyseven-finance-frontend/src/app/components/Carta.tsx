import Pokemon from '../utils/Pokemon';
import Mayus from '../utils/Mayus';

function Carta() {
  const Pokemones = Pokemon('/pokemon?limit=898&offset=0');
  return (
    <div>
      {Pokemones?.results.map((pkm) => (
        <div className="card" style={{ width: '18rem'}}>
          <img src="..." className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h2>{pkm.url.split('/')[6]}</h2>
            <h1 key={pkm.url.split('/')[6]}>{Mayus(pkm.name)}</h1>
            <p className="card-text">Soy un Pokemon</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Carta;
