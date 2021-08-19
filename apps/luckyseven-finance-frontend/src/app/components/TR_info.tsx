import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ActionTypes, State } from '../../store'
import { email } from '../constants'
import { callApi, deleteApi, postApi } from '../utils/endpoints'

const StyledApp = styled.div`

.navbar{
    background-color: #171b22;
    max-width: 80vh;
    border: 1px solid;
    display: flex;
    justify-content: center;
    margin:auto;
}
.table{
    max-width: 80vh;
    margin: auto;
    margin-bottom: 5vh;
    text-align: center;
    vertical-align: middle;
}
.table th,table td{
    vertical-align: middle;
}

.regex-actions{
    display: grid;
    max-width:10vh;
    margin: auto;
}
@media only screen and (min-width:600px){
    .navbar-nav{
        width: 60vh;
    }
}
@media only screen and (max-width:600px){
    .navbar-nav{
        width: 50vh;
    }
}
`

function TR_info() {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    });
    const dispatch = useDispatch();
    const transactions = useSelector((state: State) => state.transactions)
    var params = new URLSearchParams(window.location.search);
    const name = params.get('nombre');
    console.log(name);
    useEffect(() => {
        async function callTransactions() {
            const TR = await callApi(`withdraws/find/regex/${name}`);
            dispatch({
                type: ActionTypes.STORE_TRANSACTION,
                payload: TR
            })
        }
        callTransactions();
        return;
    }, [])
    return (
        <StyledApp>
            <div>
                <hr />
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions?.map((trans, index) => (
                            <tr style={{ verticalAlign: 'center' }} key={trans.id}>
                                <th scope="row" >{index + 1}</th>
                                <td>{formatter.format(trans.amount)} {trans.currency}</td>
                                <td>
                                    {trans.transactionDate}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StyledApp>
    )
}

export default TR_info
