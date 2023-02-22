import jwtDecode from 'jwt-decode';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Reserv = () => {
const jwt = window.localStorage.getItem('jwt');
let setUser = jwtDecode(jwt);
const currentUser = setUser.username;

const [reserve, setItems] = useState(useSelector((state) => state.reservationReducer.items));


// setItems = ;

const handleDelete = id => {
  fetch(`https://home-heart.fly.dev/reservations/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json())
  .then(data => {
    setItems(reserve.filter(resev => resev.id !== id));
  });
};
    const renderReserve = reserve.map((resev) => {
         
      const {id, user, house, start_date} = resev;
      if (currentUser === user) {
      return (
          <div className="shadow text-start p-2 py-3 m-2 rounded-3 item-list" key={id}>
                <div className=" text-capitalize">

                    <p className="text-secondary">{house}</p>

                    <div className="d-flex justify-content-between">
                      <span className="text-info"> {start_date} </span>
                      <button className="btn btn-outline-danger" onClick={() => handleDelete(id)}> Delete </button>
                </div>
            </div>
          </div>
      )
    } else {
      return 
    }
    })
  return (
    <><Link className='text-decoration-none m-3 d-block text-info' style={{color: '#000'}} to={`/properties`}> <i className="bi bi-backspace fs-3"></i></Link> 
    <h3 className='text-center'>All Reservations</h3>
     <div className='mx-auto text-center'>{renderReserve}</div>
    </>
  )
}

export default Reserv