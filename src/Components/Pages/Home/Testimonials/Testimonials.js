import React from "react";
import quote from "../../../../assets/icons/quote.svg";
import PatientsQuote from "./PatientsQuote";

const Testimonials = () => {
  return (
    <div className="my-28">
      <div className="flex justify-between">
        <div>
          <h1 className="text-secondary font-bold text-3xl">TESTIMONIALS</h1>
          <p className="font-bold">What Our Patients Says</p>
        </div>
        <div>
          <img className="lg:w-40 w-24" src={quote} alt="" srcset="" />
        </div>
      </div>
      <div>
        <PatientsQuote></PatientsQuote>
      </div>
    </div>
  );
};

export default Testimonials;
