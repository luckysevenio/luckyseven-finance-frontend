import Character from '../utils/Character'

function Carta() {
  const Personaje = Character('character');
  return (
    <div>
      {Personaje?.results.map((psj) => (
        <div className="card" style={{ width: '18rem', display: "inline-block"}}>
          <img src={psj.image} className="card-img-top" style={{display:'block'}}></img>
          <div className="card-body">
            <h1 key={psj.id} style={{fontSize:'2rem',textAlign:'center'}}>{psj.name}</h1>
            <p className="card-text">{psj.species}</p>
          </div>
        </div>
      ))}
     </div>
  );
}
export default Carta;
