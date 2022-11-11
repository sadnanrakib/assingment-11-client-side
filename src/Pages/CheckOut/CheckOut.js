import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { title, img, price, description } = useLoaderData();
  const hanldeClick = () => {
    <PhotoProvider>
      <PhotoView src={img}></PhotoView>
    </PhotoProvider>;
  };
  return (
    <div className="card card-compact  my-20 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="font-bold text-rose-600">Price: ${price}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link>
            <button onClick={() => hanldeClick()} className="btn btn-primary">
              Details
            </button>
          </Link>
        </div>
        <div>
          <textarea
            className="textarea textarea-primary"
            placeholder="Reviews"
          ></textarea>
          <div>
          <button className="btn">Review</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
