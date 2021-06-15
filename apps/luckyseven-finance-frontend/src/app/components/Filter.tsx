import axios from 'axios';
import styled from 'styled-components';
import React, { useState ,useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { ActionTypes, State } from '../../store';


const StyledApp= styled.div`
.filter{
    display: flex;
    justify-content: center;
    align-items: center;
}
.dropdown-item{
    text-align: center;
}
.displayDate{
    text-align  :center;
}
  
`;
function Filter() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];
  const dispatch = useDispatch();
  const year = useSelector((state: State)=>state.year);
  const month = useSelector((state: State) => state.month)

  const [datos,setDatos]=useState({
    year:''
  })


  const handleFilterYear = (event) => {
    dispatch({
      type: ActionTypes.STORE_YEAR,
      payload: `${event.target.value}`,
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
    <StyledApp>
        <div className="filter">
            <div className="dropdown">
                <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Month
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="month-item">
                    {months.map((month, index) => (
                        <button
                        className="dropdown-item"
                        key={index}
                        onClick={handleFilterMonth}
                        value={index}
                        >
                        {month}
                        </button>
                    ))}
                    </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                    className="btn btn-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Year
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="month-item">
                    {years.map((year, index) => (
                        <button
                        className="dropdown-item"
                        key={index}
                        onClick={handleFilterYear}
                        value={year}
                        >
                        {year}
                        </button>
                    ))}
                    </li>
                </ul>
              </div>
              <button className="btn btn-dark" onClick={submitFilter}>
                  Display
              </button>
          </div>
          <h1 className="displayDate">
            {parseInt(month.toString( ),10)+1}/{year}
          </h1>
    </StyledApp>
  );
}

export default Filter;