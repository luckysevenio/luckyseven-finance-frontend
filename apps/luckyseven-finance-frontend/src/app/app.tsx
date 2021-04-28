import Carta from './components/Carta';
import Navbar from './components/navbar';
import Paginacion from './components/Paginacion';
import Titulo from './components/Titulo';


export function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Titulo></Titulo>
      <Paginacion></Paginacion>
      <Carta></Carta>
      <Paginacion></Paginacion>
    </div>
  );
}

export default App;
