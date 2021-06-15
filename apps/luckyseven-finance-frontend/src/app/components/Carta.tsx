import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { State } from '../../store';

const StyledApp = styled.div`
.container{
  justify-content:center;
  align-items : center; 
  margin-top: 2rem;
}

.col-md-4.animate__animated.animate__zoomIn{
  margin-bottom: 2rem;
}
.card-transaction{
  text-align: center;
  background-color: #343a40;
  color: white;
}
.card-text{
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
}
.amount{
  color: red
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
                    className="card-transaction"
                    key={index}
                  >
                    <div className="card-body">
                      <h1>Amount:</h1>
                      <h1 className="amount">
                        {trs.amount}
                      </h1>
                      <h4 className="card-title">Description:</h4>
                      <p className="card-text">{trs.description}</p>
                      <h4 className="card-title">Organization:</h4>
                      <p className="card-text">{trs.organization}</p>
                      <h4 className="card-title">Date:</h4>
                      <p className="card-text">{trs.transactionDate}</p>
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
