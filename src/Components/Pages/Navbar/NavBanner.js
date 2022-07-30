import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const NavBanner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="chair-dentist"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            The ineffectiveness of curative approaches in promoting community
            oral health indicates the importance of implementing preventive
            strategies at an optimum level, which, in turn, requires the active
            presence of a prevention-oriented dental workforce. This book
            focuses on preventive orientation of the dental education system.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default NavBanner;
