import { useState } from 'react';

function Navbar() {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <nav
        className="navbar navbar-light bg-success"
        style={{ height: '5rem' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">Rick and Morty browser</a>
          <form className="d-flex">
            <input
              onChange={(event) => {
                console.log(event);
                setFilter(event.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
