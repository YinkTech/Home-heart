import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DeleteItem = () => {
  const [items, setItems] = useState([]);
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);
  const current = rest.username;

  useEffect(() => {
    fetch("http://localhost:3000/houses/")
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleDelete = id => {
    fetch(`http://localhost:3000/houses/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        setItems(items.filter(item => item.id !== id));
      });
  };

  return (
    <>
      <Link className='text-decoration-none m-3' style={{color: '#000'}} to={`/properties`}>
        <i className="bi bi-backspace fs-3"></i>
      </Link>
      <div>
        {items.map(item => {
          if (item.current_user === current) {
            return (
              <div className="shadow text-start p-2 py-3 m-2 rounded-3 delete-list" key={item.id}>
                <img src={item.image} alt="item" className="border p-2 m-2 img-del img-fluid" />
                <div className='d-flex justify-content-between section-del'>
                  <span className="my-2 fw-bolder">{item.title}</span>
                  <button className='btn btn-outline-danger' onClick={() => handleDelete(item.id)}> delete </button>
                </div>
              </div>
            );
          };
        })}
      </div>
    </>
  );
}

export default DeleteItem;