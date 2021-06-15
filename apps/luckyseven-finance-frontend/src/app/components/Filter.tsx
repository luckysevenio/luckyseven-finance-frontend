import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { ActionTypes, getTransactions, State } from '../../store';



function Filter() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dispatch = useDispatch();
  const year = useSelector((state: State)=>state.year);
  const month = useSelector((state: State) => state.month)

  const [datos,setDatos]=useState({
    year:''
  })

  const handleChange = (event)=>{
    console.log(event.target.value);
    setDatos({
        ...datos,
        [event.target.name] :event.target.value
    })
  }
  const handleFilterYear = (event) => {
    dispatch({
      type: ActionTypes.STORE_YEAR,
      payload: `${datos.year}`,
    });
  };
  const handleFilterMonth = (event) => {    
    dispatch({
      type: ActionTypes.STORE_MONTH,
      payload: `${event.target.value}`,
    })
    ;
  };
  const submitFilter = async()=>{
    try {
        const res = await axios.get(`http://localhost:1337/withdraws/${year}/${month}`);
        dispatch({
            type: ActionTypes.STORE_TRANSACTION,
            payload: res.data
        })
    } catch (error) {
        console.log(error);   
    }
  };
  return (
    <div>
      <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Months
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="month-item">
              {months.map((month, index) => (
                <button
                  className="btn "
                  key={index}
                  style={{
                    display: 'block',
                    width: '3rem',
                    backgroundColor: 'rgba(14, 112, 131, 1)',
                    border: '1px solid',
                  }}
                  onClick={handleFilterMonth}
                  value={index}
                >
                  {month}
                </button>
              ))}
            </li>
          </ul>
        </div>
      <form className="filter" onSubmit={handleFilterYear}>
        <input
          className="form-control"
          placeholder="Year"
          aria-label="Year"
          name="year"
          onChange={handleChange}
        ></input>
        <button className="btn btn-outline-dark" type="submit">
          Submit
        </button>
      </form>
      <button className="btn btn-dark" onClick={submitFilter}>
          Display
      </button>
    </div>
  );
}

export default Filter;