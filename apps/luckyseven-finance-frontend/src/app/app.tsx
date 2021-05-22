import Carta from './components/Carta';
import Navbar from './components/navbar';
import Paginacion from './components/Paginacion';
import Titulo from './components/Titulo';
import './components/style.css'


export function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Titulo></Titulo>
      <Paginacion></Paginacion>
      <Carta></Carta>
      <Paginacion></Paginacion>
    </div>
  );
}

export default App;
