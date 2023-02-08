import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Items = () => {
  const items = useSelector((state) => state.itemReducer.items);
    const rederList = items.map((item) => {
      const {id, title, description, location, price, image, } = item;
        return (
              <div className="shadow text-start p-2 py-3 m-2 rounded-3 item-list" key={id}>
                <Link className='text-decoration-none' style={{color: 'inherit'}} to={`/details/${id}`}>
                  <img src={image} alt="item" className=" img-item img-fluid" />

                  <div className="">
                    <h5 className="my-2 fw-bolder">{title}</h5>
                    
                    <p className="text-secondary text-truncate">{description}</p>

                    <p className="text-secondary"><i className="bi bi-geo-alt-fill me-3"></i>{location}</p>

                    <div className="d-flex justify-content-between">
                      <span className="text-info"> {price} </span>
                      <Link className='list-item-details btn btn-outline-info' to={`/details/${id}`}>View Details <i className='bi bi-arrow-up-right-circle ms-2'></i> </Link>
                    </div>
                  </div>
                </Link>
              </div>
        );
    });

    return <> {rederList}</>
    };

export default Items;