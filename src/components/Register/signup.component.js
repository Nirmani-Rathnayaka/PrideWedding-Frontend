
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import  {NewsTeller}  from '../../authorization/authorization';

const Newsteller = () => {
  const [formData, setFromData] = useState(
    {

        FirstName: '',
        LastName: '',
        Email: '',

    });

  const { FirstName, LastName, Email} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

 const onSubmit = async e => {
  e.preventDefault();
  console.log("On Submit Function is working")
   NewsTeller ( FirstName, LastName, Email);
    
};

  return (
    <Fragment>

      <form  onSubmit={e => onSubmit(e)}>
        
     
         <h3 className="form_text">NewsTeller Registration</h3>


        <div className="form-group">
        <label>First Name</label>
          <input className="Form-control"
            type="text"
            placeholder="First Name"
            name="FirstName"
            value={FirstName}
            required
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
        <label>Last Name</label>
          <input className="Form-control"
            type="text"
            placeholder="Last Name"
            name="LastName"
            value={LastName}
            required
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>
 


        <div className="form-group">
        <label>Email</label>
          <input className="Form-control"
            type="email"
            placeholder="Email"
            name="Email"
            value={Email}
            required
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <input type="submit" className="btn btn-dark btn-lg btn-block" value="Subscribe" />
       




     </form>
     
    </Fragment>
  );
};

export default Newsteller;