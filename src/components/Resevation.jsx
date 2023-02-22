import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Resevation = () => {
  let today = new Date()
  const date =   today.getFullYear()+ '-' + 0 + parseInt(today.getMonth() + 1) + '-' + today.getDate()
  
  const title = window.localStorage.getItem("title");
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);
  const navigate = useNavigate();
  const [username] = useState(rest.username);
  const [property] = useState(title);
  const [startDate, setStartDate] = useState("");
  
  const handleStartDate = (e) => setStartDate(e.target.value);
  
  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };

  const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();
  if (!startDate || startDate.trim().length === 0) {
    return errorMessage("Please Select a Date");
  } else if (startDate === date || startDate < date) {
    console.log(date)
    return errorMessage("Can't Pick the Current Date or Past Date");
  }else {
  formData.append("user", username);
  formData.append("house", property);
  formData.append("start_date", startDate);
  
  fetch("https://home-heart.fly.dev/reservations", {
  method: "POST",
  body: formData,
  })
  .then((res) => {res.json()})
  .then(() => {
  console.log("added successfully");
  errorMessage('Reservation Added Successfully');
  navigate("/reserve");
})
  .catch((error) => {
    console.log('there is an error: ', error.message);
  });
  };
};

  return (
    <div>
      <div className='row'>
          <div className=''>
            <div id="error-message"></div>
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
                  className='btn btn-outline-info submit-btn  mt-0'
                  value='Submit'
                />
            </form>
          </div>
        </div>
    </div>
  );
};

export default Resevation;
