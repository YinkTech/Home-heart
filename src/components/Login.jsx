import React, {  useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import video from './../img/video.mp4'

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
      fetch("https://home-heart.fly.dev/tokens", {
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
    
    <div className="sig-group">
    <video autoPlay muted loop id="myVideo">
      <source src={video} type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>

      <div className='video-content sigin align-self-center text-center7'>
        <div className="d-flex signup-content-lead text-uppercase">
          <Link to={`/signup`} className='text-light text-decoration-none mx-3 '> Sign Up</Link>
          <Link to={`/signin`} className='text-light text-decoration-underline-info ms-3'> Sign In</Link>
        </div>
          <form onSubmit={handleSubmit}>
          <div className='m-2 my-4'>
              <h3 className='text-break fs-5 text-warning fw-light '>Hey. Enter your details to get sign in <br className='d-none d-md-block' /> to your account.</h3>
          </div>

          <div id='error-message' className='my-2 '></div>
          
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text border-primary text-primary auth-btn">@</div>
                </div>
                <input
                  type="text"
                  className="form-control border-primary"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={onUsername}
                />
              </div>

              <input
                type="submit"
                className='btn btn-info px-4 text-light my-4'
                value='Sign in'
              />
            
          </form>
          <small className='text-warning fs-5'> Dont have an account? <Link to={`/signup`} className="text-decoration-none text-info">Join free today</Link> </small>
      </div>
    </div>
  );
};

export default Login;
