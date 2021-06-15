import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { State } from '../../store';

const StyledApp = styled.div`
.container{
  justify-content:center;
  align-items : center; 
  margin-top: 5rem;
}

.col-md-4.animate__animated.animate__zoomIn{
  margin-bottom: 2rem;
}
`;
function Carta() {
  const transactions = useSelector((state: State) => state.transactions);

  return (
    <StyledApp>
      <div className="container">
        <div className="row">
          {transactions?.map(
            (trs,index) =>
                <div className="col-md-4 animate__animated animate__zoomIn">
                  <div
                    className="card text-center"
                    key={index}
                  >
                    <div className="card-body">
                      <h1>
                        {trs.amount}
                      </h1>
                      <p className="card-title">Description:{trs.description}</p>
                      <p className="card-title">Organization:{trs.organization}</p>
                      <p className="card-title">Date:{trs.transactionDate}</p>
                    </div>
                  </div>
                </div>
              )
          }
        </div>
      </div>
    </StyledApp>
  );
}
export default Carta;
