import axios from 'axios'
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
    const user = useSelector((state: State)=>state.user);
    const user_balances = useSelector((state: State)=>state.user_balances)
    const dispatch = useDispatch()
    let url_addresses= '';
    async function callZapper(){
        let balance=0;
        user.Addresses.forEach(element => {
            url_addresses+=`?addresses%5B%5D=${element}&`
        });
        const url = `${url_b_zap}${url_addresses}network=ethereum&api_key=${api_key}`
        console.log(url);
        const response = await axios.get(url);
        dispatch({
            type: ActionTypes.STORE_BALANCES,
            payload: response.data
        })
        Object.values(response.data)[0]['products'][0]['assets'].forEach(element => {
            balance+=element.balanceUSD;
        });
        console.log(Object.values(response.data)[0]['meta'][0]['value']);
        console.log(balance);
        
        return balance; 
    }
    return (
        <StyledApp>
            <div className="balances">
                <button className="btn" onClick={callZapper}>Get Balances</button>
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-3 animate__animated animate__zoomIn">
                            <div className="card-USD">
                                <div className="card-body">
                                    <p>BalanceUSD:</p>
                                    {(user_balances!=null)?
                                        <p className="amount">
                                            {formatter.format(Object.values(user_balances)[0]['meta'][0]['value'])} USD
                                        </p>
                                        :
                                        <p className="amount">
                                            {formatter.format(0)} USD
                                        </p>                                                                  
                                    }
                                    <h4 className="card-title"></h4>
                                    <p className="card-text"></p>
                                    <h4 className="card-title"></h4>
                                    <p className="card-text"></p>
                                    <h4 className="card-title"></h4>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledApp>
    )
}

export default Balances
