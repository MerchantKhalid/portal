import React from "react";

const Service = ({ service }) => {
  const { treatment, description, img } = service;
  return (
    <div className="card lg:max-w-lg  bg-base-100 shadow-xl mt-8">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>

      <div className="card-body text-center">
        <h2 className="text-center uppercase font-bold">{treatment}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
