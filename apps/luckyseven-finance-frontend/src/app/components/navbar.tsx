import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../store';
import {Button, Dropdown} from 'react-bootstrap';
import Character from '../utils/Character';

function Navbar() {
  const dispatch = useDispatch();

  const handleFilterName = (event) => {
    dispatch({
      type: ActionTypes.CHANGE_FILTER,
      payload: event.target.value,
    });
  };

  const handleFilterRace = (event) => {
    console.log(event.value);
    dispatch({
      type: ActionTypes.CHANGE_RACE_FILTER,
      payload: `${event.target.value}`,
    })
    ;
  };


  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: '#2EAB47'}}
      >
        <div className="container-fluid">
          <a className="navbar-brand">Rick and Morty browser</a>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Filter by race
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item ><input onClick={handleFilterRace} defaultValue="Human" className="btn btn-dark btn-sm"></input></Dropdown.Item>
              <Dropdown.Item ><input onClick={handleFilterRace} defaultValue="Alien" className="btn btn-dark btn-sm"></input></Dropdown.Item>
              <Dropdown.Item ><input onClick={handleFilterRace} defaultValue="Robot" className="btn btn-dark btn-sm"></input></Dropdown.Item>
              <Dropdown.Item ><input onClick={handleFilterRace} defaultValue="Mythological Creature" className="btn btn-dark btn-sm"></input></Dropdown.Item>
              <Dropdown.Item ><input onClick={handleFilterRace} defaultValue="Humanoid" className="btn btn-dark btn-sm"></input></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <form className="d-flex">
            <input
              onChange={handleFilterName}
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
