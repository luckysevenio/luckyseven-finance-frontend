import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
const StyleApp = styled.div`
.sign-up-email{
    max-width:30rem;
    margin:auto;
    background-color:#8db1ab;
    text-align:center;
}
`

function UserSignUP() {
    const [user, setUser] = useState({email:'',Addresses:{"address":[]}});
    const handleChange = (event)=>{
        if (event.target.name==="Addresses"){
            const obj= [event.target.value];
            setUser({...user,[event.target.name] : obj}) 
            console.log(user);
        }
        else{
            setUser({...user,[event.target.name] : event.target.value})
            console.log(user);
        }
      }
      const handleSubmit=async(event)=>{
        try {
          const response = await axios.post(
            'http://localhost:1337/user-addresses',
            user
          );
          console.log(response);
        } catch (error) {
          this.setState({ error });
        }
        event.prevetDefault();
      }
    return (
        <StyleApp>
            <div className="sign-up-email">
                <form onSubmit={handleSubmit}>
                    <label className="form-label">Sign up email</label>
                    <input type="email" className="form-control" placeholder="name@example.com" onChange={handleChange} name="email" ></input>
                    <input type="text" className="form-control" placeholder="Wallet Address" onChange={handleChange} name="Addresses" ></input>
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        </StyleApp>
    )
}

export default UserSignUP;
