import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Properties from './Properties'

const SwitchRoutes = () => {
  return (
    <div>

      <Routes>
        <Route path='/home-heart' element={<App />} exact />

        <Route path='/Properties' element={<Properties />}  />
      </Routes>
    </div>
       
  )
}

export default SwitchRoutes