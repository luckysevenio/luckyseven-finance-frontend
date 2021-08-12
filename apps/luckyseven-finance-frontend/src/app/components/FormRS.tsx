import axios from 'axios';
import { useState } from 'react'
import { email } from '../constants';
import { postApi } from '../utils/endpoints';

function FormRS() {
    const [results, setResult] = useState({ResultState:0, Owner:email});
    const handleChange = (event)=>{
      setResult({...results,[event.target.name] : event.target.value})
      console.log(results.ResultState);
    }
    const handleSubmit=async(event)=>{
      try {
        const response = await postApi('results',results);
      } catch (error) {
        this.setState({ error });
      }
      event.prevetDefault();
    }
    return (
        <div>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                className="form-control me-2"
                type="number"
                placeholder="Result State"
                onChange={handleChange}
                name="ResultState"
                ></input>
                <button className="btn btn-dark" type="submit">Submit</button>
          </form>
        </div>
    )
}

export default FormRS
