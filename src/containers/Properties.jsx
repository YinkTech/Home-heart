import React from 'react'
import { Link } from 'react-router-dom'
import ItemList from './ItemList'

const Properties = () => {
  const isLogedIn = window.localStorage.getItem('isLoggedIn');
  
  const checked = () => {
    if (isLogedIn === "true") {
      return (
        <div className='d-flex justify-content-between'> <Link to={`/ItemPost`} className="btn btn-outline-primary">Add new Item</Link>
              <Link to={`/delete`} className="btn btn-outline-primary"> Delete Item</Link>
        </div>);
    } else if (isLogedIn === "false") {
      return <h5>Login to add Item</h5>;
    }
    else {
      return <h5>Login to add Item</h5>;
    }
  }
  return (
    <div>
      <div className='m-3'>
        {checked()}
      </div>
      <div>
        <ItemList />
      </div>

    </div>
  )
}

export default Properties