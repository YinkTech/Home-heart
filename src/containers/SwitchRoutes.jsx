import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from '../components/Details'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import ReserveDetails from './ReserveDetails'
import Signup from '../components/Signup'
import App from './App'
import ItemPost from './ItemPost'
import Properties from './Properties'
import DeleteItem from '../components/DeleteItem'

const SwitchRoutes = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>

        <Route path='/signin' element={<Login />} exact />

        <Route path='/signup' element={<Signup />}  />

        <Route path='/home-heart' element={<App />} />

        <Route path='/properties' element={<Properties />} />

        <Route path='/itempost' element={<ItemPost />} />

        <Route path='/delete' element={<DeleteItem />} />

        <Route path='/reserve' element={<ReserveDetails />} />

        <Route path='/details/:itemId' element={<Details />} />
        

      </Routes>
    </div>   
  );
};

export default SwitchRoutes;