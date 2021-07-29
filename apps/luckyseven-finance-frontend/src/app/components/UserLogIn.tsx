import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { ActionTypes, State } from "../../store";
import { email } from "../constants";

const StyledApp= styled.div`
.user{
    max-width:30rem;
    margin:auto;
    background-color:#8db1ab;
    text-align:center;
}

`

function UserLogIn() {
    const dispatch = useDispatch();
    const user = useSelector((state: State)=>state.user);
    useEffect(() => {
        async function callCharacter() {
          const response = await axios.get(`http://localhost:1337/user-addresses/find/${email}`);
          dispatch({
            type: ActionTypes.STORE_USER,
            payload: response.data,
          });
        }
        callCharacter();
        return;
      },[]);
    return (
        <StyledApp>
            {email.length ?
            <div className="user">
                <p>Actual User: {`${user?.email}`}</p>
                <p className="addresses">Addresses: {`${user?.Addresses}`}</p>
            </div>
            :
            <div className="log-in-email">
                <form >
                    <label className="form-label">Log In email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" name="email" ></input>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
            }
        </StyledApp>
    )
}

export default UserLogIn
