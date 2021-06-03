import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Pride Wedding Service Provider
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>

            <Link to="/sign-up">
            <Button buttonStyle='btn--outline'>Subscribe</Button>
            </Link>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/how-it-works'>How it works</Link>
            <Link to='/aboutus'>About us</Link>
            <Link to='/services'>Our services</Link>
            <Link to='/terms'>Terms and conditions</Link>
            <Link to='/privacy'>Privacy</Link>

            
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>&nbsp;<i class="fas fa-phone"></i>  Call us +94702826664</Link>
            <Link to='/'>&nbsp;<i class="fab fa-skype"></i>  Skype</Link>
            <Link to='/'>&nbsp;<i class="fab fa-whatsapp"></i>  Whatsapp</Link>
            <Link to='/'>&nbsp;<i class="fas fa-map-marker-alt"></i>  No 123, Hapugala, Galle</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Like us</h2>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-instagram"></i>  Instagram</Link>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-facebook-f"></i>  Facebook</Link>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-youtube"></i>  Youtube</Link>
            <Link to='/contact-info'>&nbsp;<i class="fab fa-twitter"></i>  Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
         
          <small class='website-rights'>Pride Wedding Planners © 2020|All rights reserved</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/contact-info'
             
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/contact-info'
              
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/contact-info'
             
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/contact-info'
              
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
