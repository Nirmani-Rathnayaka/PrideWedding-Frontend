import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import React, { Component } from './images';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
import Addcart from "./components/Addcart";
import Cart_upload from "./components/Cart_upload";
import Addcart2 from "./components/Addcart2";
import Sum from "./components/Sum";
import Table from "./table/Table";


import './App.css';
import "./index.css"; 
import './custom.css'
import "./components/pages/welcome.css";
import "./components/pages/selection.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/pages/welcome.component";
import Verify_Login_1 from "./components/Login/login.component";
import Verify_Login_2 from "./components/Login/login2.component";
import Signin from "./components/Login/signin.component";

import Selection from "./components/pages/selection.component";
import Path from "./components/pages/path.component";
import Client_Selection from "./components/pages/client-selection.component";

import Contactinfo from "./components/pages/contactinfo.component";
import ContactUs from "./components/pages/contacform";
//import MerchentSignup from "./components/merchentregister.component";
import MerchentAdd from "./components/pages/merchentadd.component";

import Upload from "./components/upload.component";
import Uploading from "./upload";

import Saloon_upload from "./components/Saloon_upload";
import AddBoard_Saloon from "./components/AddBoard_Saloon";
import Hotel_upload from "./components/Hotel_upload";
import AddBoard_Hotel from "./components/AddBoard_Hotel";
import Decoration_upload from "./components/Decoration_upload";
import AddBoard_Decoration from "./components/AddBoard_Decoration";
import Photographer_upload from "./components/Photographer_upload";
import AddBoard_Photography from "./components/AddBoard_Photography";
import Jweller_upload from "./components/Jweller_upload";
import AddBoard_Jweller from "./components/AddBoard_Jweller";
import Entertainer_upload from "./components/Entertainer_upload";
import AddBoard_Entertainer from "./components/AddBoard_Entertainer";

import Newcarousel from "./components/pages/newcar";
import ClientRegister from "./components/Register/ClientReg.component";
import VendorRegister from "./components/Register/VendorReg.component";
import SignUp from "./components/Register/signup.component";
import Payment from "./components/pages/payment.component";
import Forget from "./components/pages/forget.component";
import How_it_works from "./components/pages/how_it_works/how_it_works";
import Navbar from "./components/layout/NavMenu";
import Footer from "./components/layout/Footer"
import Testimonials from "./components/pages/Testimonials";
import Services from "./components/pages/Services/Services";
import Terms from './components/pages/Terms/Terms';
import Privacy from "./components/pages/Privacy/Privacy";



//import react from 'react';

/*export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}*/

function App() {
  return (<Router>
             <div className="outer">
          <div className="inner">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Selection} />
            <Route path="/selection" component={Selection} />
            <Route path="/register" component={Welcome} />
            <Route path="/path" component={Path} />
            <Route path="/sign-up" component={SignUp} />
           
            <Route path="/addcart2" component={Addcart2} />
            <Route path="/sum" component={Sum} />
            
            <Route path="/merchentadd" component={MerchentAdd}/>
            <Route path="/verify-login" component={Verify_Login_1} />
            <Route path="/verify-login-2" component={Verify_Login_2} />
            <Route path="/client-selection" component={Client_Selection} />
            <Route path="/sign-in" component={Signin}/>
            <Route path="/contact-info" component={Contactinfo}/>
            <Route path="/contact-form" component={ContactUs}/>
            <Route path="/upload" component={Upload}/>
			     
            
			      <Route path="/cart_upload" component={Cart_upload}/>
            <Route path="/addcart" component={Addcart} />
            <Route path="/table" component={Table} />


			      <Route path="/saloon_upload" component={Saloon_upload}/>
            <Route path="/saloons" component={AddBoard_Saloon}/>
		        <Route path="/hotel_upload" component={Hotel_upload}/>
            <Route path="/hotels" component={AddBoard_Hotel}/>
		        <Route path="/photographer_upload" component={Photographer_upload}/>
            <Route path="/Photographers" component={AddBoard_Photography}/>
		        <Route path="/decoration_upload" component={Decoration_upload}/>
            <Route path="/decorators" component={AddBoard_Decoration}/>
		        <Route path="/jweller_upload" component={Jweller_upload}/>
            <Route path="/jwellers" component={AddBoard_Jweller}/>
		        <Route path="/entertainer_upload" component={Entertainer_upload}/>
            <Route path="/entertainers" component={AddBoard_Entertainer}/>
			
			
            <Route path="/aboutus" component={Newcarousel}/>
            <Route path="/uploading" component={Uploading}/>
            <Route path="/pay" component={Payment}/>
            <Route path="/forget-pw" component={Forget}/>       
            <Route path="/testimonials" component={Testimonials}/>
            <Route path="/how-it-works" component={How_it_works}/>
            <Route path="/services" component={Services}/>
            <Route path="/terms" component={Terms}/>
            <Route path="/privacy" component={Privacy}/>

            <Route path="/Client-Registration" component={ ClientRegister}/>
            <Route path="/Vendor-Registration" component={ VendorRegister}/>

            
          </Switch>
          </div> </div> 
          <Footer/>
    </Router>
    
  );
}

export default App;