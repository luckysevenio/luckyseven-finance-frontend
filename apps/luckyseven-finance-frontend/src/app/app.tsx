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
import { email } from "./constants";
import { callApi } from './utils/endpoints';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NetWorth from './components/NetWorth';
import FormRS from './components/FormRS';
import FormNW from './components/FormNW';
import Payments from './components/Payments';
import Transactions from './components/Transactions';
import TR_info from './components/TR_info';

const StyledApp = styled.div`
  .app{
    font-family: 'Oxygen', sans-serif;
    background-color:#0c1117;
  }
  .body{
    min-height:calc(100vh - 370px);
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
      const result_s = await callApi(`results/last/getLast/${email}`);
      const total_NW= await callApi(`net-worth/last/getLast/${email}`)    
      const balance = await callApi(`user-addresses/getBalances/${email}`)
      const payment = await callApi(`payments/List/${email}`)
      const regex = await callApi(`deposit-regexes/find/${email}`)
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
        type: ActionTypes.STORE_NW,
        payload: total_NW,
      })
      dispatch({
        type: ActionTypes.STORE_PAYMENT,
        payload: payment
      })
      dispatch({
        type: ActionTypes.STORE_REGEX,
        payload: regex
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
      <Router>
        <div className="app">
            <Navbar/>
            <Actions/>
            <div className="body">
            <Switch>
              <Route path="/estado-resultado">
                <Resultstate/>
                <NetWorth/>
              </Route>
              <Route path="/last-result/upload">
                <FormRS/>
              </Route>
              <Route path="/net-worth/upload">
                <FormNW/>
              </Route>
              <Route path="/pagos">
                <hr/>
                <Payments/>
              </Route>
              <Route path="/transacciones/info">
                <hr />
                <TR_info/>
              </Route>
              <Route path="/transacciones">
                <hr/>
               <Transactions/>
              </Route>
              <Route path="/">
                <Balances/>
              </Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </StyledApp>
  );
}

export default App;
