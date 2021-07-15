import axios from 'axios'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ActionTypes, State } from '../../store';
import { api_key, url_b_zap } from '../constants'

const StyledApp = styled.div`
.balances{
   text-align: center
}
.btn{
    background-color:#8db1ab;
}
.col-md-4.animate__animated.animate__zoomIn{
    margin-bottom: 2rem;
}
.card-USD{
    text-align: center;
    background-color: #8db1ab;
    color: black;
    border: 1px solid
    min-width: 10rem;
}
.card-text{
    color: gray;
    font-family: Arial, Helvetica, sans-serif;
}
.amount{
    color: red
}
`
function Balances() {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
      });
    const user_balances = useSelector((state: State)=>state.user_balances)
    const dolar = useSelector((state:State)=>state.dolar)
    return (
        <StyledApp>
            <div className="container">
                <div className="row"> 
                    <div className="col-md-6 animate__animated animate__zoomIn">
                        <div className="card-USD">
                            <div className="card-body">
                                <p>Balance en USD:</p>
                                    {(user_balances!=null)?
                                    <p className="amount">
                                        {formatter.format(user_balances)} USD
                                    </p>
                                    :
                                    <p className="amount">
                                        {formatter.format(0)} USD
                                    </p>                                                                  
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 animate__animated animate__zoomIn">
                            <div className="card-USD">
                                <div className="card-body">
                                    <p>Balance en CLP:</p>
                                        {(user_balances!=null)?
                                        <p className="amount">
                                            {formatter.format(user_balances*dolar)} CLP
                                        </p>
                                        :
                                        <p className="amount">
                                            {formatter.format(0)} USD
                                        </p>                                                                  
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </StyledApp>
    )
}

export default Balances
