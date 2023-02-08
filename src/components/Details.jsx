import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { removeSelectedItem, selectedItem } from '../redux/actions/action'
import Resevation from './Resevation'

const Details = () => {
  const item = useSelector((state) => state.selectedItemReducer);
  const {title, description, location, price, image} = item;
  window.localStorage.setItem("title", title);
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const fetchItemDetails = async() => {
    const response = await axios
    .get(`http://localhost:3000/houses/${itemId}`)
    .catch((err)=> {
      console.log('Err ', err);
    });
    dispatch (selectedItem(response.data));
  };

  useEffect(()=> {
    if (itemId && itemId !== "") fetchItemDetails();
    return () => {
      dispatch(removeSelectedItem());
    };
  },  [itemId])

  return (
    <div className=''>
      <div className='p-3 border-bottom'>
        <Link className='text-decoration-none' style={{color: '#000'}} to={`/properties`}> <i className="bi bi-backspace fs-3"></i></Link>
      </div>
      <div className='container-fluid'>
        {Object.keys(item).length === 0 ? (
          <div className='text-info mx-5 fs-2 text-uppercase'>loading</div>
            ) : (
              <div className="p-2 align-content-center row justify-content-around">
                <div className="col-md-6 shadow text-start p-2 rounded-3 detail-list">
                  
                        <img src={image} alt="item" className=" img-item img-fluid" />
      
                        <div className="">
                          <h5 className="my-2 fw-bolder">{title}</h5>
                          <p className="text-secondary">{description}</p>
                          <p className="text-secondary">{location}</p>
                          <div className="d-flex justify-content-between">
                            <span className="text-info"> {price} </span> 
                          </div>
                        </div>
                  
                </div>
                <div className=' shadow col-md-5 p-5 p-md-3'>
                  <h3 className='fw-bolder text-info text-center'>Make Reservation</h3>
                    <div className='p-o'>
                        <div className='my-3'>
                          <small className='text-muted font-monospace dropdown-item-text'>
                            Experience the luxury of your own private getaway!
                            Book now and immerse yourself in the comfort and serenity of our fully-furnished house.
                            With spacious rooms, stunning views, and all the amenities you need,
                            this is the perfect escape from the hustle and bustle of daily life.
                              Don&apos;t miss out on this incredible opportunity to relax and rejuvenate.
                              Reserve your stay today!
                          </small>
                        </div>
                      <Resevation />
                    </div>
                </div>
              </div>
        )};
      </div>
    </div>
  );
};

export default Details;