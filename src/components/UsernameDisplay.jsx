import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import { Link, useNavigate } from "react-router-dom";

const UsernameDisplay = () => {
  const [OnName, setName] = useState({
    username: ''
  })

  const isLogedIn = window.localStorage.getItem('isLoggedIn');
  
  useEffect(() => {
    if (isLogedIn === "true") {
    let jwt = window.localStorage.getItem('jwt');
    let result = jwtDecode(jwt);
    setName({username: result.username});
    }
  }, [setName]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isLoggedIn', false);
    navigate("/");
    window.location.reload();
  }
  const checked = () => {
    if (isLogedIn === "true") {
      return <div> <b className='text-capitalize'> {OnName.username} <i className="bi bi-person-fill"></i> </b> <button className="btn btn-outline-info m-2"  onClick={logout} >Sign out </button> </div>;
    } else if (isLogedIn === "false") {
      return <div> <Link to={`/signup`} className='text-decoration-none btn btn-outline-info m-2'> Sign Up </Link> <Link to={`/signin`} className='text-decoration-none btn btn-outline-warning'>Login</Link></div>;
    }
    else {
      return <div> <Link to={`/signup`} className='text-decoration-none btn btn-outline-info m-2'> Sign Up </Link> <Link to={`/signin`} className='text-decoration-none btn btn-outline-warning'>Login</Link></div>;
    }
  }

  return (
    <div>
      {checked()}
    </div>
  )
}

export default UsernameDisplay