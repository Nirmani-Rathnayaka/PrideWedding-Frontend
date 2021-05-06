import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { MdToys } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdToys className='navbar-icon' />
              Pride Wedding Service Providers
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/selection' className='nav-links' onClick={closeMobileMenu}>
                  Home&nbsp;<i class="fas fa-home"></i>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Our Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/contact-form'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/aboutus'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/sign-in'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
              <li className="nav-item dropdown">
              <ul className="nav-links " 
              type="button" 
              id="navbarDropdownMenuLink" 
              data-bs-toggle="dropdown"
              >
              Sign Up
              </ul>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>  <Link className="dropdown-item"  to={"/Client-Registration"}>SignUp as Client</Link> </li>
                  <li>  <Link className="dropdown-item"  to={"/Vendor-Registration"}>SignUp as Vendor</Link> </li>

                </ul>
              </li>
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
