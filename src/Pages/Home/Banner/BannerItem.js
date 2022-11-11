import React from 'react';
import'./BannerItem.css'

const BannerItem = ({slied}) => {
    const {image,id,prev,next}= slied;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="garident">
        <img src={image} className="w-full rounded-xl" alt="" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
          <div>
            <h1 className="text-6xl font-bold text-white ">
              Cheap <br />
              Priceing For Photograpy <br />
              Servicing
            </h1>
          </div>
        </div>
        <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-1/2 ">
          <div>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4 ">
          {/* <div>
            <button className="btn btn-outline btn-primary mr-5">Button</button>
            <button className="btn btn-outline btn-secondary">Button</button>
          </div> */}
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default BannerItem;