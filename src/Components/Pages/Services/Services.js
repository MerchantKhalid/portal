import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      treatment: "Fluoride Treatment",
      description:
        "These treatments have much more fluoride than whats in your water or toothpaste. They only take a few minutes to apply. You may be asked to avoid eating or drinking for 30 minutes after the treatment so the fluoride can fully absorb.",
      img: fluoride,
    },
    {
      _id: 2,
      treatment: "Cavity feeling",
      description:
        "Having a cavity filled may cause some discomfort, but it should not cause pain. Anyone who experiences moderate or severe pain during or after the procedure should let their dentist know.",
      img: cavity,
    },
    {
      _id: 3,
      treatment: "Whitening",
      description:
        "Teeth whitening is ideal for people who have healthy, unrestored teeth (no fillings) and gums. Individuals with yellow tones to their teeth respond best.",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h1 className="text-primary uppercase font-bold text-xl">
          Our Services
        </h1>
        <p className="text-4xl">Service We Provide</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
