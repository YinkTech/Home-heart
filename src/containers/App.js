import React from "react";
import slider1 from './../img/slider-2.jpg';
import slider2 from './../img/slider-3.jpg';
import slider3 from './../img/slider-4.jpg';
import secImage1 from './../img/oat-construction-nigeria-promise.jpg';
import cash from './../img/icon/cash.png';
import insur from './../img/icon/insur.png';
import property from './../img/icon/property.png';
import hricon from './../img/icon/24hr.jpg';
import item2 from './../img/item2.jpg';
import item3 from './../img/item3.jpg';
import item4 from './../img/item4.jpg';
import ficon1 from './../img/icon/info.png';
import ficon2 from './../img/icon/location.png';
import ficon3 from './../img/icon/all-set.png';
import dropbox from './../img/icon/dropbox.png';
import air from './../img/icon/air.png';
import asana from './../img/icon/asana.png';
import mailchimp from './../img/icon/mailchimp.png';
import Flogo from './../img/logo.png';
import { Link } from "react-router-dom";


function App() {
  return (
    <div>    
      <div id="carouselExampleDark" className="carousel d-none d-md-block carousel-light slide" data-bs-ride="carousel">
         
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner slider-body wave">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src={slider1} className="d-block sliders" alt="slider1" />
              <div className="slider-caption carousel-caption d-none d-md-block ">
                <h5 className="text-warning fs-1">HOME & HEART REALTY LTD.</h5>
                <p className="text-white">Beautiful investments.</p>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="2000">
              <img src={slider2} className="d-block sliders" alt="slider1" />
              <div className="slider-caption carousel-caption d-none d-md-block">
                <h5 className="text-warning fs-1">We are provide your dream home.</h5>
                <p className="text-white">Residential real estate may contain either a single &apos;amity or multifamily structure that is available for occupation or for non-business available purposes.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src={slider3} className="d-block sliders" alt="slider1" />
              
              <div className="slider-caption carousel-caption d-none d-md-block set-color">
                <h5 className="text-warning fs-1">Beautiful investments.</h5>
                <p className="text-white">Smartest Way To Find Your Home.</p>
              </div>

          </div>

        </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>


      </div>

{/* small screen display */}

      <div className="sliders d-flex d-md-none align-items-center mb-5" >
        <div className="container">
        <h3 className="my-4">HOME & HEART REALTY LTD.</h3>
        <h6>Beautiful investments.</h6>
        <h5>We are provide your dream home.</h5>
        <h6 className="text-warning">Smartest Way To Find Your Home.</h6>
        <a href="#sed" className="btn btn-outline-light"> continue</a>
        </div>
      </div>
{/* small screen display */}

      <div id="sed" className="container-fluid text-center mb-5 ">
        <h2 className=" fw-bolder section-header"> Featured Properties </h2>
        <hr className="separator w-50 mx-auto" />
        
        <p className="text-secondary m-0">Residences can be classified by and how they are connected tto there neighbouring residence and land.</p>
        <p className="text-secondary m-0"> different types of housing tenure can be used for the same physical type. </p>

        
        <div className="secfield d-md-flex my-4 mx-md-5 text-center">
          <img src={secImage1} alt="secImage1" className="img-fluid secImage1" />
           <div>
            <div className="d-md-block">
              <div className="secfield2 shadow rounded">
                <img src={insur} alt="secIcon" className="secIcon" />
                <h5 className="fw-bolder">Tax Advantage</h5>
                <p className="text-secondary">
                  Residonces can be by and
                  they are connected
                  to neighbouring and lan
                  types of housing
                </p>
              </div>

              <div className="secfield2 shadow rounded">
                <img src={property} alt="secIcon" className="secIcon" />
                <h5 className="fw-bolder">Property Insurance</h5>
                <p className="text-secondary">
                  Residonces can be by and
                  they are connected
                  to neighbouring and lan
                  types of housing
                </p>
              </div>
            </div>
              <div className="secfield2 shadow rounded">
                <img src={cash} alt="secIcon" className="secIcon" />
                <h5 className="fw-bolder"> Low Commission </h5>
                <p className="text-secondary">
                  Residonces can be by and
                  they are connected
                  to neighbouring and lan
                  types of housing
                </p>
              </div>

              <div className="secfield2 shadow rounded">
                <img src={hricon} alt="secIcon" className="secIcon" />
                <h5 className="fw-bolder">24 Hrs Service</h5>
                <p className="text-secondary">
                  Residonces can be by and
                  they are connected
                  to neighbouring and lan
                  types of housing
                </p>
              </div>
              
            </div>
        </div>

      </div>

      <div className="third-sec ">
        <div className="container">
          <div className="d-sm-flex  my-5 justify-content-between">
          <div>
            <h2 className="m-0"> Our Best Collection On Sale</h2>
            <small className="text-secondary fw-bold p-0"> Get your dream place that poppuler now </small>
          </div>
          <div>
            <Link to={`/properties`} className="btn btn-outline-info">View All</Link>
          </div>
          </div>

          <div className="d-md-flex text-center justify-content-md-between">
            <div className="shadow text-start p-2 rounded-3 list-item">
              <img src={item2} alt="item" className=" img-item img-fluid" />

              <div className="">
                <h5 className="my-2 fw-bolder">Chestnut Valley.</h5>
                <p className="text-secondary">Lorem ipsum doloc sit amet consectetur. Bibendum ipsum orci integer quis neque.</p>
                <div className="d-flex justify-content-between">
                  <span className="text-info"> $500 </span>
                  <Link className='list-item-details text-info'>View Details</Link>
                </div>
              </div>
            </div>

            <div className="shadow text-start p-2 rounded-3 list-item">
              <img src={item3} alt="item" className=" img-item img-fluid" />

              <div className="">
                <h5 className="my-2 fw-bolder">Chestnut Valley.</h5>
                <p className="text-secondary">Lorem ipsum doloc sit amet consectetur. Bibendum ipsum orci integer quis neque.</p>
                <div className="d-flex justify-content-between">
                  <span className="text-info"> $500 </span>
                  <Link className='list-item-details text-info'>View Details</Link>
                </div>
              </div>
            </div>

            <div className="shadow text-start p-2 rounded-3 list-item">
              <img src={item4} alt="item" className=" img-item img-fluid" />

              <div className="">
                <h5 className="my-2 fw-bolder">Chestnut Valley.</h5>
                <p className="text-secondary">Lorem ipsum doloc sit amet consectetur. Bibendum ipsum orci integer quis neque.</p>
                <div className="d-flex justify-content-between">
                  <span className="text-info"> $500 </span>
                  <Link className='list-item-details text-info'>View Details</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="fourth-sec my-5">
        <div className="container text-center">
          <div className=" row mb-5 text-start justify-content-between  align-items-center ">
            <b className="fs-1 fw-bolder col-md-4">3 Easy Steps To Find Your Next Home.</b>
            <small className="text-secondary col-md-4"> Lorem ipsum dolor sit amet consectetur. 
              Bibendum adipiscing ipsum orci integer quis neque.</small>
            <div className="col-md-3">
              <button className="btn btn-primary m-2 m-sm-0"> Get Started </button>
            </div>
          </div>

          <div className="p-sm-5 row text-start justify-content-between  align-items-center ">
            <div className="col-md-4 p-2 d-md-flex flex-md-column">
              <img src={ficon1} alt="icon4" className="forth-icon"/>
              <b className="text-capitalize mt-2"> come with information</b>
            </div>
            
            <div className=" col-md-4 p-2 d-md-flex flex-md-column">
              <img src={ficon2} alt="icon4" className="forth-icon"/>
              <b className="text-capitalize mt-2"> Choose a type </b>
            </div>
            
            <div className=" col-md-3 p-2 d-md-flex flex-md-column">
              <img src={ficon3} alt="icon4" className="forth-icon"/>
              <b className="text-capitalize mt-2"> All  set now</b>
            </div>
          </div>
        </div>
      </div>

      <div className="fifth-sec py-sm-4 d-flex flex-md-row flex-column align-content-center justify-content-around">
        <a href='https://www.dropbox.com/' target='_blank' rel="noreferrer"><img src={dropbox} alt="companies-logo" className="img-fluid companies-logo" /></a>
        <a href='https://www.airbnb.com/' target='_blank' rel="noreferrer"><img src={air} alt="companies-logo" className="img-fluid companies-logo" /></a>
        <a href='https://asana.com/' target='_blank' rel="noreferrer"><img src={asana} alt="companies-logo" className="img-fluid companies-logo" /></a>
        <a href='https://mailchimp.com/en-gb/' target='_blank' rel="noreferrer"><img src={mailchimp} alt="companies-logo" className="img-fluid companies-logo" /></a>
      </div>

      <footer className="footer">
        <div className="container py-5 d-md-flex justify-content-center">
          <div className="col-md-4">
            <img src={Flogo} alt="logo" className="img-fluid foot-logo" />
            <div className="my-2"><i className="bi bi-envelope"></i> <b>home&heart@home.com</b></div>
            <div><i className="bi bi-telephone"></i> <b>+112</b></div>
          </div>
          
          <hr className="d-md-none my-4" />

          <div className="col-md-2">
            <h4>About</h4>
            <ul className=" list-unstyled  text-capitalize">
              <li>company</li>
              <li> Team </li>
              <li> Career </li>
              <li> Blogs </li>
              <li> Pricing </li>
            </ul>
          </div>
          
          <hr className="d-md-none my-4" />

          <div className="col-md-2">
          <h4>Address</h4>
            <ul className=" list-unstyled  text-capitalize">
              <li>country delivery</li>
              <li>country beach post</li>
              <li> www.home-heart.com </li>
              <li> +234 </li>
            </ul>
          </div>
          
          <hr className="d-md-none my-4" />

          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className=" list-unstyled  text-capitalize">
              <li>
                <div className="input-group mb-4">
                  <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="button-addon2" />
                  <button className="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
                </div>
              </li>
              <li className="d-flex justify-content-around">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-instagram"></i>
              </li>
            </ul>
          </div>
        </div>  
         <h5 className="text-dark text-center m-0 p-2"> Copyright © {new Date().getFullYear()} Yink<span className="text-warning">Tech</span> </h5>
      </footer>

    </div>
  );
};

export default App;
