import { faSearch, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function navbar() {
  const months = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Luckyseven
        </a>
        <FontAwesomeIcon icon={faWallet}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
           </ul>
          <ul className="navbar-nav mb-2 mb-lg-0"> 
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-dark" type="submit">
              Search
            <FontAwesomeIcon icon={faSearch}/>
            </button>
          </form>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
