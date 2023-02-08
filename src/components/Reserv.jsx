import jwtDecode from 'jwt-decode';
import React from 'react'
import { useSelector } from 'react-redux';

const Reserv = () => {
const jwt = window.localStorage.getItem('jwt');
let setUser = jwtDecode(jwt);
const currentUser = setUser.username;

  const reserve = useSelector((state) => state.reservationReducer.items);

    const renderReserve = reserve.map((resev) => {
      const {id, user, house, start_date} = resev;
      if (currentUser === user) {
      return (
          <div className="shadow text-start p-2 py-3 m-2 rounded-3 item-list" key={id}>
                <div className="">
                    <h5 className="my-2 fw-bolder">{user}</h5>
                    
                    <p className="text-secondary">{house}</p>
  
                    <div className="d-flex justify-content-between">
                      <span className="text-info"> {start_date} </span>
                </div>
            </div>
          </div>
      )
    } else {
      return 
    }
    })
  return (
    <>{renderReserve}</>
  )
}

export default Reserv