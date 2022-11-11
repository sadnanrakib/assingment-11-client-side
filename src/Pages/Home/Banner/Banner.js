import React from "react";
import img1 from "../../../assets/images/banner/img1.jpg";
import img2 from "../../../assets/images/banner/img2.jpg";
import img3 from "../../../assets/images/banner/img3.jpg";
import BannerItem from "./BannerItem";



const Banner = () => {

  const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    },
    
]
  return (
    <div>
      <div className="carousel w-full py-10">

        {
          bannerData.map(slied=><BannerItem 
            key={slied.id}
            slied={slied}
            ></BannerItem>)
        }
       

      </div>
    </div>
  );
};

export default Banner;
