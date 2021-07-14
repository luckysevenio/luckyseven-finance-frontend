import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ActionTypes, State } from '../../store';

const StyledApp= styled.div`
.display-result{
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
function Resultstate() {
    const result = useSelector((state: State)=>state.lastresult)
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    });
    return (  
        <StyledApp>
            <div className="display-result">
                <div className="col-md-4 animate__animated animate__zoomIn">                        
                    <div className="card-result">
                        <div className="card-body">
                            <h1>Ultimo estado de resultado</h1>
                                <hr/>
                            {(result!=null)?
                            <p className="last-result">{formatter.format(result[0].ResultState)} CLP</p>
                            :
                            <p className="last-result">{formatter.format(0)} CLP</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </StyledApp>
    )
}

export default Resultstate
