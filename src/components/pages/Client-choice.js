
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';




export default class Employee extends Component {
    render() {
        return (

            <div>
                 <h1 className="testClass">Welcome to Pride Wedding Service Provider </h1>
                  <h1 className="testClass9">  </h1>
                   <Link to="/addcart">
                    <button class="badge badge-danger-green" > | CREATE YOUR WEDDING CART| </button>
                   </Link>
                  <h3 className="testClass5">OR</h3>
                  <Link to="/client-selection-2">
                   <button class="badge badge-danger-green" > | WATCH WEDDING ADDVERTISEMENTS| </button>
                  </Link>
               
           </div> 
     
        );
    }
}