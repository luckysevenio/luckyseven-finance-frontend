import styled from "styled-components";

const StyledApp = styled.div`
.navbar.navbar-expand-lg.navbar-light{
  border: 2px solid;
  margin-bottom:1rem;
}
`;
function Navbar() {
  return (
    <StyledApp>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Luckyseven
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
           </ul>
          </div>
          <ul className="navbar-nav"> 
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
          </ul>
        </div>
    </nav>
    </StyledApp>
  );
}

export default Navbar;
