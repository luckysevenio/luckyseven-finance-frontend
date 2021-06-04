import styled from 'styled-components';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { getCharacter } from './utils/endpoints';
import { useDispatch ,useSelector} from 'react-redux';
import { ActionTypes, State } from '../store';
import Lists from './components/Lists';
import Footer from './components/Footer';
import Filter from './components/Filter';

const StyledApp = styled.div`
  .app {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 30%,
      rgba(0, 212, 255, 1) 100%
    );
    height: 100vh;
  }
  .navbar {
    border: solid 2px black;
    background: rgb(47, 41, 142);
    background: linear-gradient(
      270deg,
      rgba(47, 41, 142, 1) 0%,
      rgba(14, 112, 131, 1) 100%
    );
  }
  .navbar-brand {
    margin-right: 0px;
  }
  .navbar-nav{
    display:flex;
    justify-content: flex-start;
  }
  .filter{
    max-width: 30rem;
    margin: auto;
    display:flex;
    justify-content:center;
  }
  .btn{
    margin:auto;
    min-width:10rem;
    background-color:rgba(14, 112, 131, 1)
  }
  .list-group{
    max-width: 100rem;
    margin: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .list-group-item.list-group-item-action {
    border: 2px solid;
    background: rgb(47, 41, 142);
    background: linear-gradient(
      270deg,
      rgba(47, 41, 142, 1) 0%,
      rgba(14, 112, 131, 1) 100%
    );
    margin-top: 1rem;
    margin-bottom: 0.1rem;
  }
  .footer{
    background-color:rgba(14, 112, 131, 1);
  }
`;

export function App() {
  const year = useSelector((state: State) => state.year); 
  const month = useSelector((state: State) => state.month); 
  const dispatch = useDispatch();
  useEffect(() => {
    async function callCharacter() {
      const response = await getCharacter(year,month);
      dispatch({
        type: ActionTypes.STORE_TRANSACTION,
        payload: response,
      });
    }
    callCharacter();
    return;
  },[]);
  return (
    <StyledApp>
      <div className="app">
        <Navbar />
        <br/>
        <Filter/>
        <Lists />
        <Footer/>
      </div>
    </StyledApp>
  );
}

export default App;
