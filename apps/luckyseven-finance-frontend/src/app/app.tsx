import styled from 'styled-components';

import Carta from './components/Carta';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Footer from './components/Footer'

const StyledApp = styled.div`
  .app{
    font-family: 'Oxygen', sans-serif;
    background: rgb(238, 69, 64);
    background: linear-gradient(
    180deg,
    rgba(238, 69, 64, 1) 0%,
    rgba(199, 44, 65, 1) 15%,
    rgba(128, 19, 54, 1) 30%,
    rgba(81, 10, 50, 1) 45%,
    rgba(45, 20, 44, 1) 100%
  );
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
          <Filter></Filter>
          <Carta></Carta>
        </div>
        <Footer/>
      </div>
    </StyledApp>
  );
}

export default App;
