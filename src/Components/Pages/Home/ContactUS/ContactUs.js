import React from "react";
import appointment from "../../../../assets/images/appointment.png";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";

const ContactUs = () => {
  return (
    <div
      className="text-center p-5 my-28"
      style={{ backgroundImage: `url(${appointment})` }}
    >
      <div className="grid gap-4 grid-cols-1">
        <div>
          <h2 className="text-secondary font-bold uppercase text-3xl">
            Contact Us
          </h2>
          <p className="font-bold text-white">Stay Connected With Us</p>
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-md"
          />
        </div>
        <div>
          <textarea
            class="textarea textarea-bordered w-full max-w-md mb-5"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>

      <PrimaryButton className="uppercase mt-5">Submit</PrimaryButton>
    </div>
  );
};

export default ContactUs;
