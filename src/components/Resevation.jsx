import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const Resevation = () => {
  const title = window.localStorage.getItem("title");
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);
  const navigate = useNavigate();
  const [username] = useState(rest.username);
  const [property] = useState(title);
  const [startDate, setStartDate] = useState("");
  
  const handleStartDate = (e) => setStartDate(e.target.value);
  
  const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("user", username);
  formData.append("house", property);
  formData.append("start_date", startDate);
  
  fetch("http://localhost:3000/reservations", {
  method: "POST",
  body: formData,
  })
  .then((res) => {
  res.json();
  console.log("added successfully");
  navigate("/reserve");
  })
  .catch((error) => {
  console.log('there is an error: ', error.message);
  });
  };       
  return (
    <div>
      <div className='container-fluid row'>
        <h1 className='text-info my-3 text-capitalize'>Make reservation</h1>
          <div className=''>
            <form onSubmit={handleFormSubmit}>
                <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-person-add"></i></div>
                  </div>
                  <input
                    type="text"
                    className="form-control text-capitalize"
                    id="user"
                    name="user"
                    value={rest.username}
                    disabled
                  />
                </div>

                <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-house-add"></i></div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="house"
                    name="house"
                    value={title}
                    disabled
                  />
                </div>

                <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-calendar2-plus"></i></div>
                  </div>
                    <input
                    type="date"
                    className="form-control"
                    id="start_date"
                    name="start_date"
                    placeholder="Pick a Date"
                    onChange={handleStartDate} />
                </div>
 
                <input
                  type="submit"
                  className='btn btn-outline-info submit-btn m-5 mt-0'
                  value='Submit'
                />
            </form>
          </div>
        </div>
    </div>
  );
};

export default Resevation;
