import styled from "styled-components";

const StyledApp = styled.div`
.navbar.navbar-expand-lg.navbar-light{
  border: 1px solid;
  margin-bottom:1rem;
  background-color: #343a40;
}
.navbar-brand{
  color: white;
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
        <ul className="navbar-nav"> 
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-light" type="submit">
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
