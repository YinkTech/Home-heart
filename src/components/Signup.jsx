import React, {  useState } from 'react';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState('');
  const onUsername = (e) => setusername(e.target.value);
  
  window.localStorage.setItem('isLoggedIn', false)
     const errorMessage = (input) => {
      return input
     };
          const handleSubmit = event => {

            event.preventDefault();
            var formData = new FormData();
            if (username === "" || username === undefined ) {
               return errorMessage('enter username');
            }
            else{
              formData.append("username", username);
              fetch("http://localhost:3000/users",
                  {method: 'POST', body: formData})
                  .then(res => res.json())
                  .then(errorMessage(<div className="bg-success"><h5>Signup success</h5> </div>))
                  .then( navigate("/signin"))
                  
                  .catch(function(error){console.log('there is an error: ', error.message)});
            }
          }
              
  return (
    <div className=' my-5 pt-5 container text-center flex-column'>
      <h1 className='text-uppercase fw-bolder text-shadow my-5 text-primary'>Signup form</h1>
        <form onSubmit={handleSubmit}>
          {errorMessage()}
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
              className='btn btn-outline-info m-4 submit-btn'
              value='Submit'
            />
          
        </form>
    </div>
  )
}

export default Signup