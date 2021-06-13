import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionTypes, State } from '../../store';


function Filter() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [datos,setDatos]=useState({
    year:''
  })

  const dispatch = useDispatch();

  const handleChange = (event)=>{
    console.log(event.target.value);
    setDatos({
        ...datos,
        [event.target.name] :event.target.value
    })
  }
  const handleFilterYear = (event) => {
    event.preventDefault();
    dispatch({
      type: ActionTypes.STORE_YEAR,
      payload: `${datos.year}`,
    })
    ;
  };
  const handleFilterMonth = (event) => {
    console.log(event.value);
    dispatch({
      type: ActionTypes.STORE_MONTH,
      payload: `${event.target.value}`,
    })
    ;
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
    </div>
  );
}

export default Filter;
