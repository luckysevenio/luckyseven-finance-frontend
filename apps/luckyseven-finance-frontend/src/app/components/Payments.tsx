import { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { State } from '../../store';
import { email, months, years } from '../constants'
import { postApi } from '../utils/endpoints';

const StyledApp = styled.div`

.navbar{
    background-color: #171b22;
    max-width: 30rem;
    border: 1px solid
    display: flex;
    justify-content: center;
    margin:auto;
}
.btn{
    background:#8db1ab;
}
.table{
    max-width: 80vh;
    margin: auto;
    margin-bottom: 5vh;
}
`
function Payments() {
    const payments = useSelector((state: State) => state.payment)
    const [payment, setPayment] = useState({ Year: 'Año', Month: 'Mes', Amount: 0, Mail: email })
    const handleChange = (event) => {
        setPayment({ ...payment, [event.target.name]: event.target.value })
        console.log(payment);
    }
    const handleSubmit = async () => {
        try {
            const res = await postApi('payments', payment);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <StyledApp>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <form onSubmit={handleSubmit} className="form-payment">
                    <ul className="navbar-nav">
                        <select className="form-select form-select-lg " aria-label="Default select example" name="Year" onChange={handleChange} value={payment.Year}>
                            <option selected>Año</option>
                            {years.map((year) => (
                                <option
                                    value={year}
                                >
                                    {year}
                                </option>
                            ))}
                        </select>
                        <select className="form-select form-select-lg" aria-label="Default select example" name="Month" onChange={handleChange} value={payment.Month}>
                            <option selected>Mes</option>
                            {months.map((month) => (
                                <option
                                    value={month}
                                >
                                    {month}
                                </option>
                            ))}
                        </select>
                        <input onChange={handleChange} name="Amount" type="number" className="form-control" id="floatingInput" placeholder="Monto"></input>
                        <button type="submit" className="btn">Subir</button>
                    </ul>
                </form>
            </nav>
            <hr />
            <table className="table table-dark table-striped">
                {console.log(payments)}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Monto</th>
                    </tr>
                </thead>
                <tbody>
                {payments?.map((pay, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{pay.Year}/{pay.Month}</td>
                        <td>${pay.Amount} CLP</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </StyledApp >
    )
}

export default Payments
