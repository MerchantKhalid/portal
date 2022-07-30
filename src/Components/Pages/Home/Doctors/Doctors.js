import React from "react";
import doctor from "../../../../assets/images/doctor.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
import bg from "../../../../assets/images/appointment.png";

const Doctors = () => {
  return (
    <div
      className="flex justify-center items-center rounded text-white p-5 my-28"
      style={{ background: `url(${bg})` }}
    >
      <div className="flex-1">
        <img className="mt-[-140px]" src={doctor} alt="" srcset="" />
      </div>
      <div className="ml-5 flex-1">
        <h1 className="text-5xl font-bold">
          Exceptional Dental Care, on Your Terms
        </h1>
        <p className="py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default Doctors;
