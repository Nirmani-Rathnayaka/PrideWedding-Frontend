import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './selection.css';




export default class Employee extends Component {
    render() {
        return (
        <form>  
        <div>
        
            <div>
              <div class="position-absolute top-left"> 
                 <p class="new2"> **** WELL DONE! YOU CAN PUBLISH YOUR ADVERTISMENTS **** </p> 
                  <p class="new2"> </p> 
              </div> 
              <h1 className="testClassNull">  </h1>
              <div class="position-absolute mid-left"> 
              <Link to="/hotelpay">  
                 <button type="button" class="new3">HOTEL AND CATERING</button> 
              </Link>
                
              </div> 
              <div class="position-absolute mid-center"> 
              <Link to="/saloonpay"> 
                 <button type="button" class="new3">SALOON</button> 
             </Link>
              </div> 
              <div class="position-absolute mid-right"> 
              <Link to="/photographypay"> 
                 <button type="button" class="new3">PHOTOGRAPGHY</button> 
              </Link> 
                
              </div> 
  
              <div class="position-absolute bottom-left"> 
              <Link to="/jwellerypay"> 
                 <button type="button" class="new3">JWELLERY</button>
              </Link>
               
              </div> 
              <div class="position-absolute bottom-center"> 
              <Link to="/decorationpay"> 
                 <button type="button" class="new3" >DECORATIONS</button> 
              </Link>
               
              </div> 
              <div class="position-absolute bottom-right"> 
              <Link to="/entertainmentpay"> 
                 <button type="button" class="new3">ENTERTAINMENT</button> 
              </Link > 
               
              </div> 
            </div> 
        </div> 
        </form>  
        );
    }
}
