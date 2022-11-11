import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://assingment-server-11.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-700">Services</p>
        <h1 className="text-5xl font-semibold mb-3">My Service </h1>
        <p className="text-xl">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  my-10 gap-20 ">
        {services?.slice(0, 3).map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div>
        <button className="btn btn-outline btn-success ml-96 mb-10">
          <Link to="/service">See All</Link>
        </button>
      </div>
    </>
  );
};

export default Services;
