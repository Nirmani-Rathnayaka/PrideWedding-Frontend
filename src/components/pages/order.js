import React from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_nd3a7mu', 'template_footflz', e.target, 'user_WPljFuEY31Ra1G1e6uLlO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
        <div>
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
        <input type="subject" className="form-control" placeholder="Selected CartItems" name="subject" />
        
     </div>
     <div className="form-group">
      <h6>Enter your proposed wedding dates and additional details.</h6>
        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Description" name="message" />
        <input type="submit" className="btn btn-info" value="Send Message" />
      </div>  
      </form>
      </div>
    );
  }