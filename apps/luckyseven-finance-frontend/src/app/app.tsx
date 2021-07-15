import styled from 'styled-components';

import Carta from './components/Carta';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Footer from './components/Footer'
import Resultstate from './components/Resultstate';
import UserSignUP from './components/UserSignUp';
import UserLogIn from './components/UserLogIn';
import Balances from './components/Balances';
import Actions from './components/Actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ActionTypes } from '../store';
import { api_key, email, url_b_zap } from "./constants";
import { callApi } from './utils/endpoints';


const StyledApp = styled.div`
  .app{
    font-family: 'Oxygen', sans-serif;
    background-color:#0c1117;
  }
  .body{
    min-height:calc(100vh - 15rem)
  }
  @media only screen and (max-width: 1000px){
    .body{
      min-height: calc(100vh - 23rem)
    }
  }
`;

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function callCharacter() {
      const user = await callApi(`user-addresses/find/${email}`);
      const result_s = await callApi(`results/last/getLast`);    
      const balance = await callApi(`user-addresses/getBalances/${email}`)
      const dolar = await axios.get('https://mindicador.cl/api/dolar')
      dispatch({
        type: ActionTypes.STORE_USER,
        payload: user,
      })
      dispatch({
        type: ActionTypes.STORE_BALANCES,
        payload: balance
      })
      dispatch({
        type: ActionTypes.STORE_LAST_RESULT,
        payload: result_s,
      })
      dispatch({
        type: ActionTypes.STORE_DOLAR,
        payload: dolar.data['serie'][0]['valor']
      })
    }
  callCharacter();
  return;
},[]);
  return (
    <StyledApp>
      <div className="app">
        <div className="body">
          <Navbar></Navbar>
          <Actions></Actions>
          <Resultstate></Resultstate>
          <Balances></Balances>
        </div>
        <Footer/>
      </div>
    </StyledApp>
  );
}

export default App;
