import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';



function Filter() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dispatch = useDispatch();
  const transactions = useSelector(store=>store.transaction);

  return (
    <div>
        <form className="filter">
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
                  value={index}
                >
                  {month}
                </button>
              ))}
            </li>
          </ul>
        </div>
          <input
            className="form-control"
            placeholder="Year"
            aria-label="Year"
            name="year"
          ></input>
          <button className="btn btn-outline-dark" type="submit">
            Submit
          </button>
        </form>
    </div>
  );
}

export default Filter;
