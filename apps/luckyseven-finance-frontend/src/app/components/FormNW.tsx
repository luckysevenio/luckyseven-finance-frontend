import { useState } from 'react'
import { postApi } from '../utils/endpoints';

function FormNW() {
    const [nw, setNW] = useState({Balance:0});
    const handleChange = (event)=>{
      setNW({...nw,[event.target.name] : event.target.value})
      console.log(nw.Balance);
    }
    const handleSubmit=async(event)=>{
      try {
        const response = await postApi('net-worths',nw);
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
                placeholder="Net Worth"
                onChange={handleChange}
                name="Balance"
                ></input>
                <button className="btn btn-dark" type="submit">Submit</button>
          </form>
        </div>
    )
}

export default FormNW