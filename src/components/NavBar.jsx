import React from 'react'
import { Link } from 'react-router-dom'
import icon from './../img/nav-logo.png'
import Theme from "./Theme";
import UsernameDisplay from './UsernameDisplay';

const NavBar = () => {
  const setNav = () => {
  const logged = window.localStorage.getItem('isLoggedIn');
    if (logged === 'true' ) {
      return (
        <div className='d-lg-flex' >
          <Link to={`/home-heart`} className='text-info nav-link fs-5 fw-bold'  > Home </Link>
          <Link to={`/properties`} className='text-info nav-link nav-color fs-5 fw-bold'> Properties </Link>
          <Link to={`/reserve`} className='text-info nav-link fs-5 fw-bold me-md-5'> Bookings </Link>
        </div>
        );
      } else {
        return <div className='d-flex align-items-center fs-4'><i className='bi bi-segmented-nav'></i></div>
      }
    };
  return (
    <div className='sticky-top border-bottom'>
      <nav className="navbar p-0 navbar-expand-lg navbar-light ">
        <div className="container-fluid ">

          <Link to={`/home-heart`} className='navbar-brand mx-5'> <img src={icon} alt='Logo' className='img-fluid nav-logo' /> </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              {setNav()}
              <div className='d-lg-flex ms-md-5 '>
                <UsernameDisplay />
              </div>
            </div>
          </div>
          
          <Theme />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;