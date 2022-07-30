import React from "react";
import clock from "../../../../assets/icons/clock.svg";
import marker from "../../../../assets/icons/marker.svg";
import phone from "../../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid  grid-cols-3 gap-5">
      <InfoCard
        bgClass={"bg-gradient-to-r from-secondary to-primary"}
        img={clock}
        cardTitle={"Opening Hours"}
        cardText={"we open from 08.00 - 08.00PM"}
      ></InfoCard>
      <InfoCard
        bgClass={"bg-accent"}
        img={marker}
        cardTitle={"Our location"}
        cardText={"34 AVENUE LAPLACE,94300"}
      ></InfoCard>
      <InfoCard
        bgClass={"bg-gradient-to-r from-secondary to-primary"}
        img={phone}
        cardTitle={"Contact Us"}
        cardText={"+351920102458"}
      ></InfoCard>
    </div>
  );
};

export default Info;
