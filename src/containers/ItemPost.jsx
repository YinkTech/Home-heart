import jwtDecode from 'jwt-decode';
import React, {  useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SignupImg from './../img/addName.jpg';

const ItemPost = () => {
  const navigate = useNavigate();
  const jwt = window.localStorage.getItem("jwt");
  const rest = jwtDecode(jwt);

  const [onCurrentUser] = useState(rest.username);
  
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [location, setlocation] = useState('');
  const [price, setprice] = useState('');
  const [image, setimage] = useState('');
  const onTitle = (e) => settitle(e.target.value);
  const onDescription = (e) => setdescription(e.target.value);
  const onLocation = (e) => setlocation(e.target.value);
  const onPrice = (e) => setprice(e.target.value);
  const onImage = (e) => setimage(e.target.files[0]);

  const errorMessage = (input) => {
    document.getElementById("error-message").textContent = input;
  };

          const handleSubmit = event => {
            event.preventDefault();
            var formData = new FormData();
              formData.append("current_user", onCurrentUser);
              formData.append("title", title);
              formData.append("description", description);
              formData.append("location", location);
              formData.append("price", price);
              formData.append("image", image);
              if (!title || title.trim().length === 0) {
                return errorMessage('enter a title');
             } else if (!description || description.trim().length === 0) {
                return errorMessage('enter a description');
             } else if (!location || location.trim().length === 0) {
                return errorMessage('enter a location');
             } else if (!price || price.trim().length === 0) {
                return errorMessage('enter a price');
             }
              else if (!image) {
                return errorMessage('Choose an image');
             }
              fetch("https://home-heart.fly.dev/houses",
                  {method: 'POST', body: formData})
                  .then(res => (res.json(), console.log('add successfully'), navigate("/properties")))
                  .catch(function(error){console.log('there is an error: ', error.message)});
          }
        
  return (
    <div>
      <div className='border-bottom mb-4'>
      <Link className='text-decoration-none m-3' style={{color: '#000'}} to={`/properties`}> <i className="bi bi-backspace fs-3"></i></Link> 
          
      </div>
        <div className=' container-fluid row'>
      <h1 className='text-info my-3'>Add House</h1>
          <div className='col-md-6 d-none d-md-block '>
            <img src={SignupImg} alt="signup" className='img-fluid' />
          </div>
          <div className='col-md-5'>
            <form onSubmit={handleSubmit}>
              <div id='error-message' className='my-2 text-capitalize'></div>

              <div className="input-group mb-5">
          
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-house-add"></i></div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="House Name"
                    onChange={onTitle}
                  />
                </div>

              <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-suit-diamond"></i></div>
                  </div>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="House Description"
                    onChange={onDescription}
                  ></textarea>
                </div>

              <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-geo-alt"></i></div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    placeholder="Location"
                    onChange={onLocation}
                  />
                </div>

              <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-tags"></i></div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Price"
                    onChange={onPrice}
                  />
                </div>

              <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <div className="input-group-text auth-btn"><i className="bi bi-file-image"></i></div>
                  </div>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    placeholder="Image"
                    onChange={onImage}
                    accept="image/*"
                  />
                </div>
 
                <input
                  type="submit"
                  className='btn btn-outline-info submit-btn '
                  value='Submit'
                />
              
            </form>
          </div>
        </div>
    </div>
  )
}

export default ItemPost