import Character from '../utils/Character';

function Carta() {
  const name = 'summer';
  const Personaje = Character('character');
  return (
    <div>
      {Personaje?.results.map(
        (psj) =>
          new RegExp(name, 'i').test(psj.name) && (
            <div
              className="card"
              style={{ width: '18rem', display: 'inline-block' }}
            >
              <img
                src={psj.image}
                className="card-img-top"
                style={{ display: 'block' }}
              ></img>
              <div className="card-body">
                <h1
                  key={psj.id}
                  style={{ fontSize: '2rem', textAlign: 'center' }}
                >
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
