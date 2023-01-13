import React from 'react'
import { Link } from 'react-router-dom'
import icon from './../img/nav-logo.png'
import Theme from "./Theme";

const NavBar = () => {
  return (
    <div >
      <nav className="navbar p-0 navbar-expand-lg navbar-light ">
        <div className="container-fluid ">
          <Link to={`/home-heart`} className='navbar-brand mx-5'> <img src={icon} alt='Logo' className='img-fluid nav-logo' /> </Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
                <Link to={`/home-heart`} className='text-info nav-link fs-5 fw-bold'> Home </Link>
                <Link to={`/Properties`} className='text-info nav-link nav-color fs-5 fw-bold'> Properties </Link>
                <Link to={`/home-heart`} className='text-info nav-link fs-5 fw-bold me-md-5'> Bookings </Link>
                
                <div className='d-lg-flex ms-md-5'>
                  <Link to={`/home-heart`} className=' ms-md-5 btn btn-outline-info mx-2'> Sign In </Link>
                  <Link to={`/home-heart`} className='btn btn-outline-info'> Sign Out </Link>

                </div>

            </div>
          </div>
          <Theme />

        </div>
      </nav>
    </div>
  )
}

export default NavBar