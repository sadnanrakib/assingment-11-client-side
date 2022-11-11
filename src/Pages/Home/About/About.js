import React from "react";
import person from "../../../assets/images/about_us/1.jpg";
import parts from "../../../assets/images/about_us/2.jpg";

const About = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            className="w-4/5 h-full rounded-lg shadow-2xl"
            alt=""
          />
          <img src={parts} className=" absolute w-2/3 right-5 top-3/4 border-8 rounded-lg shadow-2xl " alt="" />
        </div>
        <div className="w-1/2 ml-5">
          <p className="text-xl font-bold text-orange-600">About us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br />& of experience in this field
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
