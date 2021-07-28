import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../../store'

const StyledApp = styled.div`
    .actions{
      color: white;
      border: 1px solid black;
      max-width: 90%;
      margin: auto;
      background-color: #171b22;  
    }
    .dolar-balance{
        margin-bottom:0 ;
    }
    .navbar-nav{
        justify-content: space-between;
        margin: auto;
    }
    .navbar-brand{
        color: white;
        margin-right: 3rem
    }
`


function Actions() {
    const dolar = useSelector((state:State)=>state.dolar)
    return (
        <StyledApp>
            <div className="actions">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <p className="dolar-balance">
                          Precio del dolar: {`${dolar}`} CLP  
                        </p>
                        <ul className="navbar-nav">
                            <a className="navbar-brand" href="/estado-resultado">
                                Estado de resultado y Balance Neto
                            </a>
                            <a className="navbar-brand">
                                Transacciones
                            </a>
                            <a className="navbar-brand">
                                Direcciones
                            </a>
                            <a className="navbar-brand">
                                Balances
                            </a>
                        </ul>
                    </div>
                </nav>
            </div>
        </StyledApp>
    )
}

export default Actions
