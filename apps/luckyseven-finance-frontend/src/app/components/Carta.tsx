import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { State } from '../../store';

const StyledApp = styled.div`
.container{
  justify-content:center;
  align-items : center;
  height:100;
}
.
`;
function Carta() {
  const transactions = useSelector((state: State) => state.transactions);

  return (
    <StyledApp>
      <div className="container ">
        <div className="row">
          {transactions?.map(
            (trs,index) =>
                <div className="col-md-3 animate__animated animate__zoomIn">
                  <div
                    className="card text-center"
                    key={index}
                  >
                    <div className="card-body">
                      <h1>
                        {trs.amount}
                      </h1>
                      <p className="card-title">{trs.organization}</p>
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
