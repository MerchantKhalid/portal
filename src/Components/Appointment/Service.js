import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="font-bold text-3xl text-secondary text-center">
          {name}
        </h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Appointments Available</span>
          )}
        </p>
        <p className="text-dark font-bold">
          {slots.length}
          {slots.length > 1 ? " spaces" : " space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            for="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary text-white btn modal-button"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
