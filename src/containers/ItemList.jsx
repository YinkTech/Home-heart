import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import Items from '../components/Items';
import { setItem } from '../redux/actions/action';

const ItemList = () => {
  const dispatch = useDispatch();

  const fetchItem = async () => {
    const response = await axios
    .get(`https://home-heart.fly.dev/houses`)
    .catch((err) => {
      console.log('err', err);
    });
    dispatch(setItem (response.data));
  };
  
  useEffect(() => {
    fetchItem();
  }, []);


  return (
    <div className='item-container'>
      <Items />
    </div>
  )
}

export default ItemList