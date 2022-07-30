import React from "react";

const PatientsQuoteCard = ({ comment }) => {
  const { name, description, img, location } = comment;
  return (
    <div className="card shadow-xl p-5">
      <p className="font-normal">{description}</p>
      <div className="card-body flex flex-row items-center">
        <div>
          <img src={img} alt="" srcset="" />
        </div>
        <div>
          <h2 className="font-bold">{name}</h2>
          <p className="font-bold">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsQuoteCard;
