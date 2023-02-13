import React from 'react'
import { Link } from 'react-router-dom'
import icon from './../img/nav-logo.png'
import Theme from "./Theme";
import UsernameDisplay from './UsernameDisplay';

const NavBar = () => {
  const them = localStorage.getItem('themes');
  
  const setNav = () => {
  const logged = window.localStorage.getItem('isLoggedIn');
    if (logged === 'true' ) {
      return (
        <div className='d-lg-flex' >
          <Link to={`/Home-heart`} className='mb-3 mb-lg-0 text-info nav-link fs-5 fw-bold'  > Home </Link>
          <Link to={`/properties`} className='mb-3 mb-lg-0 text-info nav-link nav-color fs-5 fw-bold'> Properties </Link>
          <Link to={`/reserve`} className='mb-3 mb-lg-0 text-info nav-link fs-5 fw-bold me-lg-5'> Bookings </Link>
        </div>
        );
      } else {
        return <div className='d-flex align-items-center fs-4'><i className='bi bi-segmented-nav'></i></div>
      }
    };
  return (
    <div className='sticky-top border-bottom themes'>
      <nav className={`navbar p-0 navbar-expand-lg navbar-light ${them}`}>
        <div className="container-fluid">

          <Link to={`/Home-heart`} className='navbar-brand mx-5'> <img src={icon} alt='Logo' className='img-fluid nav-logo' /> </Link>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa-solid fa-bars-staggered"></span>
          </button>

          <div className="collapse navbar-collapse text-end text-lg-start justify-content-between align-content-center" id="navbarNavAltMarkup">

            <div className='nav-link pe-5 pe-lg-0 mb-3 mb-lg-0 align-self-lg-center'>
                <Theme />
            </div>

            <div className="navbar-nav ">
              {setNav()}
            </div>
          
          <UsernameDisplay />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;