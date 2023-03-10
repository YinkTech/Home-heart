import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Reserv from '../components/Reserv';
import { setReservation } from '../redux/actions/action';

const ReserveDetails = () => {
  const dispatch = useDispatch();

  const fetchReservation = async() => {
    const response = await axios
    .get(`https://home-heart.fly.dev/reservations`)
    .catch((err)=> {
      console.log('Err ', err);
    });
    dispatch (setReservation(response.data));
  };

  useEffect(() => {
    fetchReservation();
  }, [fetchReservation]);
  
  return (
    <div>
      <Reserv />
    </div>
  );
};

export default ReserveDetails;
