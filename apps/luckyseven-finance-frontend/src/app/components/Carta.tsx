import Character from '../utils/Character';
import { useSelector } from 'react-redux';
import { State } from '../../store';

function Carta() {  
  const name = useSelector((state: State) => state.nameFilter);
  const race = useSelector((state: State) => state.raceFilter);
  const pageNumber = useSelector((state: State) => state.pageNumber);
  const Personaje = Character(`character?page=${pageNumber}&species=${race}`);
  return (
    <div>
      {Personaje?.results.map(
        (psj) =>
          new RegExp(`${name}`, 'i').test(psj.name) && (
            <div
              className="card"
              style={{ width: '18rem', display: 'inline-block' }}
              key={psj.id}
            >
              <img
                src={psj.image}
                className="card-img-top"
                style={{ display: 'block' }}
              ></img>
              <div className="card-body">
                <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>
                  {psj.name}
                </h1>
                <p className="card-text">{psj.species}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
}
export default Carta;
