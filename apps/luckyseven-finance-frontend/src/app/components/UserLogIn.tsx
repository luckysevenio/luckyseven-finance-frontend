import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { ActionTypes, State } from "../../store";

const StyledApp= styled.div`
.log-in-email{
    max-width:30rem;
    margin:auto;
    background-color:#8db1ab;
    text-align:center;
}
`

function UserLogIn() {
    const dispatch = useDispatch();
    const user_email = useSelector((state: State)=>state.email_user)
    const [email, setResult] = useState({mail:''});
    const handleChange = (event)=>{
      setResult({...email,[event.target.name] : event.target.value})
      console.log(email.mail);
    }
    const handleSubmit=async(event)=>{
      try {
        dispatch({
            type: ActionTypes.STORE_EMAIL_USER,
            payload: email.mail,
        })
      } catch (error) {
        this.setState({ error });
      }
    }
    return (
        <StyledApp>
            {console.log(user_email)}
            {user_email.length ?
            <div className="log-in-email">
                <h1>Actual User: {`${user_email}`}</h1>
            </div>
            :
            <div className="log-in-email">
                <form onSubmit={handleSubmit}>
                    <label className="form-label">Log In email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" onChange={handleChange} name="email" ></input>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
            }
        </StyledApp>
    )
}

export default UserLogIn
