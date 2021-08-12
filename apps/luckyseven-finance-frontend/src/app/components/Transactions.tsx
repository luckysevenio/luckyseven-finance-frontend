import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State } from '../../store'
import { email } from '../constants'
import { deleteApi, postApi } from '../utils/endpoints'

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

function Transactions() {
    const regexes = useSelector((state: State) => state.regexes)
    const [regex, setRegex] = useState({ owner: email, regex: '' })
    const handleChange = (event) => {
        setRegex({ ...regex, [event.target.name]: event.target.value })
    }
    const handleID = async (event) => {
        try {
            const del = await deleteApi(`deposit-regexes/${event.target.value}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async (event) => {
        try {
            const post = await postApi('deposit-regexes', regex);
        } catch (error) {
            console.log(error);
        }
        event.prevetDefault();
    };

    return (
        <StyledApp>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <form onSubmit={handleSubmit} className="form-payment">
                        <ul className="navbar-nav">
                            <input onChange={handleChange} name="regex" type="text" className="form-control" id="floatingInput" placeholder="Nombre de transacción  "></input>
                            <button type="submit" className="btn" style={{ background: '#8db1ab' }}>AGREGAR</button>
                        </ul>
                    </form>
                </nav>
                <hr />
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {regexes?.map((regex, index) => (
                            <tr style={{verticalAlign:'center'}}>
                                <th scope="row" >{index + 1}</th>
                                <td>{regex.regex}</td>
                                <td>
                                    <div className="regex-actions">
                                        <button className="btn btn-danger" onClick={handleID} name="ID" value={regex.id} style={{gridRow:1,gridColumn:1,marginBottom:'5px'}}>Borrar</button>
                                        <button className="btn" onClick={handleID} name="ID" value={regex.id} style={{gridRow:2,gridColumn:1 ,background: '#8db1ab' }}>Ver</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </StyledApp>
    )
}

export default Transactions
