import styled from 'styled-components';

import Carta from './components/Carta';
import Navbar from './components/Navbar';

import Filter from './components/Filter';

const StyledApp = styled.div`
  .app{
    font-family: 'Oxygen', sans-serif;
    min-height: 100vh;
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
`;

export function App() {
  return (
    <StyledApp>
      <div className="app">
        <Navbar></Navbar>
        <Filter></Filter>
        <Carta></Carta>
      </div>
    </StyledApp>
  );
}

export default App;
