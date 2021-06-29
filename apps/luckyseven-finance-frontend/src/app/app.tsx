import styled from 'styled-components';

import Carta from './components/Carta';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Footer from './components/Footer'
import Resultstate from './components/Resultstate';
import UserSignUP from './components/UserSignUp';
import UserLogIn from './components/UserLogIn';
import Balances from './components/Balances';


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
  return (
    <StyledApp>
      <div className="app">
        <div className="body">
          <Navbar></Navbar>
          <UserSignUP/>
          <br/>
          <UserLogIn/>
          <Balances/>
          <Resultstate/>
          <Filter></Filter>
          <Carta></Carta>
        </div>
        <Footer/>
      </div>
    </StyledApp>
  );
}

export default App;
