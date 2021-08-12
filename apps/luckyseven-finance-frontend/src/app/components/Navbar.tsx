import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import L7 from "../images/L7.jpeg";

const StyledApp = styled.div`
.navbar.navbar-expand-lg.navbar-light{
  margin-bottom:1rem;
  background-color: #171b22;
  color: white
}
.navbar-brand{
  color: white;
}
.btn{
  background-color:#8db1ab;
  border: 1px solid;
}
.img{
  height:30px
}
`;

function Navbar() {
  const [results, setResult] = useState({ResultState:0});
  const handleChange = (event)=>{
    setResult({...results,[event.target.name] : event.target.value})
    console.log(results);
  }
  const handleSubmit=async(event)=>{
    try {
      const response = await axios.post(
        'http://localhost:1337/results',
        results
      );
      console.log(response);
    } catch (error) {
      this.setState({ error });
    }
    event.prevetDefault();
  }
  return (
    <StyledApp>
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Luckyseven
          <img src={L7} className="img" alt="L7"/>
        </a>
        <ul className="navbar-nav">   
          <button className="btn btn-outline" type="submit">
            Iniciar Sesion
          </button>
          <button className="btn btn-outline" type="submit">
            Registrarse
          </button>
        </ul>
      </div>
    </nav>
    </StyledApp>
  );
}

export default Navbar;
