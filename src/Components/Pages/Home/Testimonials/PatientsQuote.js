import React from "react";
import patient1 from "../../../../assets/images/people1.png";
import patient2 from "../../../../assets/images/people2.png";
import patient3 from "../../../../assets/images/people3.png";
import PatientsQuoteCard from "./PatientsQuoteCard";

const PatientsQuote = () => {
  const comments = [
    {
      _id: 1,
      name: "Merchant",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Lisbon",
      img: patient1,
    },
    {
      _id: 2,
      name: "Hasan",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "London",
      img: patient2,
    },
    {
      _id: 3,
      name: "Khalid",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "Paris",
      img: patient3,
    },
  ];
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {comments.map((comment) => (
        <PatientsQuoteCard
          key={comment._id}
          comment={comment}
        ></PatientsQuoteCard>
      ))}
    </div>
  );
};

export default PatientsQuote;
