

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-success" style={{height:'5rem'}}>
        <div className="container-fluid">
          <a className="navbar-brand">Rick and Morty browser</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
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
