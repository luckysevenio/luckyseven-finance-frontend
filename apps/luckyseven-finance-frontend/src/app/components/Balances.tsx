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
`
function Balances() {
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
            balance+=element.price;
        });
        console.log(response.data);
        console.log(balance);
        return balance; 
    }
    return (
        <StyledApp>
            <div className="balances">
                <button className="btn" onClick={callZapper}>Get Balances</button>
            </div>
        </StyledApp>
    )
}

export default Balances
