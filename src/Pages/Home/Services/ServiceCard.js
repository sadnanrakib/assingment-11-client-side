import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id,img, title, price,description} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-rose-600">Price: ${price}</p>
        {
                        description.length > 250 ?
                            <p>{description.slice(0, 250) + '...'} <Link to={`/checkout/${_id}`}>Read More</Link> </p>
                            :
                            <p>{description}</p>
                    }
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default ServiceCard;
