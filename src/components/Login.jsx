import React, {  useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const onUsername = (e) => setusername(e.target.value);
  
  window.localStorage.setItem('isLoggedIn', false);
  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    if (!username || username.trim().length === 0) {
      return errorMessage("enter username");
    } else {
      formData.append("username", username);
      fetch("http://localhost:3000/tokens", {
        method: "POST",
        body: formData,
      })
      
      .then((res) => res.json())
      .then((response) => {
        errorMessage(
          <div className="bg-success">
            <h5>Login success</h5>{" "}
          </div>
        );
        
        console.log(response.jwt);
        window.localStorage.setItem("jwt", response.jwt);
        window.localStorage.setItem("isLoggedIn", true);
        if (response.jwt === undefined) {
          console.log(" Username is not valid ");
          errorMessage('Username is not valid ');
        } else {
          navigate("/Home-heart");
          window.location.reload();
        }
      })
      
      .catch((error) => {
        console.log("there is an error: ", error.message);
      });
    };
  };            
              
  return (
    <div className=' my-5 pt-5 container text-center flex-column'>
      <h1 className='text-uppercase fw-bolder text-shadow my-5 text-warning'>Login form</h1>
      
      <form onSubmit={handleSubmit}>
        <div id='error-message' className='my-2 '></div>
        
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text border-warning text-warning auth-btn">@</div>
          </div>
          
          <input
            type="text"
            className="form-control border-warning"
            id="username"
            name="username"
            placeholder="Username"
            onChange={onUsername}
          />
        </div>

        <input
          type="submit"
          className='btn btn-outline-primary m-4 submit-btn'
          value='Submit'
        />    
      </form>
    </div>
  );
};

export default Login;