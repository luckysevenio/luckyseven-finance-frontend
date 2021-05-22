import logo from '../images/RnM(logo).png'

function Titulo() {
    return (
        <div className="title" style={{textAlign:'center'}}>
            <img className="logo" src={logo}></img>
            <h1>Character browser of Rick and Morty</h1>
        </div>
    )
}

export default Titulo
