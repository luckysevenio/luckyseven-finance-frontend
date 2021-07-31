
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { State } from '../../store';

const StyledApp= styled.div`
.display-networth{
    display:grid;
    justify-content:center;
    align-items:center;
    margin: auto;
    background-color: #8db1ab;
    max-width: 20rem;
    border: 5px solid white;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.col-md-4{
    margin: auto;
    min-width: 20rem
}
.card-body{
    text-align: center;
}
`
function NetWorth() {
    const networth = useSelector((state: State)=>state.net_worth)
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    });
    console.log(networth.length);
    return (  
        <StyledApp>
            <div className="display-networth">
                <div className="col-md-4 animate__animated animate__zoomIn">                        
                    <div className="card-result">
                        <div className="card-body">
                            <h1>Ultimo Net Worth Ingresado:</h1>
                                <hr/>
                            {(networth.length)?
                            <p className="last-networth">{formatter.format(networth[0].Balance)} USD</p>
                            :
                            <p className="last-networth">{formatter.format(0)} USD</p>
                            }
                            <a className="btn btn-dark" href="/net-worth/upload">Actualizar</a>
                        </div>
                    </div>
                </div>
            </div>
        </StyledApp>
    )
}

export default NetWorth