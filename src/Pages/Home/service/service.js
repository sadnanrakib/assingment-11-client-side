import React, { useEffect, useState } from 'react';
import ServiceCard from '../Services/ServiceCard';


const Service = () => {
    const [ser, setSer] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => setSer(data));
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
          {ser.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        
        
      </>
    );
};

export default Service;