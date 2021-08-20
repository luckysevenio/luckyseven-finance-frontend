import React from 'react'
import styled from 'styled-components'

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
    return (
        <StyledApp>
            <div>
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
                        <tr style={{ verticalAlign: 'center' }}>
                            <th scope="row" >1</th>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </StyledApp>
    )
}

export default Results
