import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { ActionTypes, State } from '../../store';
import { email } from '../constants';
import { callApi } from '../utils/endpoints';

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

function Results() {
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    });
    const transactions = useSelector((state: State) => state.user_results)
    console.log(transactions?.global.resultado);
    
    return (
        <StyledApp>
            <div>
                <h1 style={{ color: "white", textAlign: "center" }}>Global</h1>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Retiros</th>
                            <th scope="col">Sueldos</th>
                            <th scope="col">Resultados</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ verticalAlign: 'center' }}>
                            <td>{transactions==null? formatter.format(0) :formatter.format(transactions?.global.retiros)} CLP</td>
                            <td >{transactions==null? formatter.format(0) :formatter.format(transactions?.global.sueldos)} CLP</td>
                            <td style={Math.sign(transactions?.global.resultados) != -1 ? { color: "white" } : { color: "red" }}>{transactions==null? formatter.format(0) :formatter.format(transactions?.global.resultados)} CLP</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Mes</th>
                            <th scope="col">Retiros</th>
                            <th scope="col">Sueldos</th>
                            <th scope="col">Resultados</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions?.detalle.map((tr, index) => (
                            <tr style={{ verticalAlign: 'center' }} key={index}>
                                <th scope="row" >{tr.fecha}</th>
                                <td>{formatter.format(tr.retiros)} CLP</td>
                                <td >{formatter.format(tr.sueldos)} CLP</td>
                                <td style={Math.sign(tr.resultado) != -1 ? { color: "white" } : { color: "red" }}>{formatter.format(tr.resultado)} CLP</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StyledApp>
    )
}

export default Results
