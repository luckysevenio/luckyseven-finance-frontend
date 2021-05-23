import Carta from './components/Carta';
import Navbar from './components/navbar';
import Paginacion from './components/Paginacion';
import Titulo from './components/Titulo';
import './components/style.css'
import { useEffect } from 'react';
import { getCharacter } from './utils/endpoints';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../store';



export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function callCharacter() {
      const response = await getCharacter('character');
      dispatch({
        type: ActionTypes.STORE_CHARACTERS,
        payload: response,
      });
    }
    callCharacter();
    return;
  },[]);
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
