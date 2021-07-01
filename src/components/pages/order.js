import React from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_nd3a7mu', 'template_nu1jeqg', e.target, 'user_WPljFuEY31Ra1G1e6uLlO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
        <div>
          <br></br>
      <form  onSubmit={sendEmail}>
      <h3>Order Discount Packages</h3>
      <h4>Your Details</h4>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Name" name="name" />
     </div>
     <div className="form-group">
        <input type="email" className="form-control" placeholder="Email" name="email" />
     </div>   
     <h4>Your CartItems Details</h4>
     <div className="form-group">
        <input type="date" className="form-control" placeholder="Proposed Wedding Date" name="date" />
     </div>
     <div className="form-group">
        <input type="cartitems" className="form-control" placeholder="Selected Cart Items" name="cartitems" />
     </div>
     <div className="form-group">
        <textarea className="form-control" id="" cols="30" rows="5" placeholder="Additional Information " name="message" />
        <input type="submit" className="btn btn-info" value="Send Message" />
      </div>  
      </form>
      </div>
    );
  }