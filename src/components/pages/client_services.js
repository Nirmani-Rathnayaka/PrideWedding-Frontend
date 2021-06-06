import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './selection.css';
import Wedding from "./video/wedding-c.mp4";
//import './client_services.css';




export default class Employee extends Component {
    render() {
        return (
            
<form>
  <div>

  <video autoPlay loop muted
            style={{
                
                width: "100%",
                height:"30%",
                objectFit: "fill",
                transform: "translate (-50%, -50%)",
                zIndex: "-1"  
                
            } }
            >
                <source src={Wedding} type="video/mp4" />
            </video>  

              <form>
              <div className=" text-justify bottom"> 
                 <h3> PRIDE WEDDING SERVICE PROVIDERS </h3> 

                  <Link to="/pay">
                  < button type="submit" className="btn btn-dark btn-lg btn-block">Discover</button>
                  </Link>
          
           <h6> With our eye for detail, Pride Wedding Planners in Sri Lanka will look after every requirement that counts for a picture-perfect wedding. From consultation to complete wedding planning, we provide a function of any size, scheduled to take place in any location. Clients are capable of choosing their needs under our offered categories according to their wish as well as concerning about their budget. Here our website facilitates a filtering process under cost of packages, service providing area (location based), and also the rating gained by the vendors.</h6> 
           
              </div> 
              </form>       
              </div>            
              </form> 
     
        );
    }
}
