import React from "react";
import Footer from "../../Shared/Footer/Footer";

import NavBanner from "../Navbar/NavBanner";
import Services from "../Services/Services";
import ContactUs from "./ContactUS/ContactUs";
import DentalCare from "./DentalCare/DentalCare";
import Doctors from "./Doctors/Doctors";
import Info from "./Info/Info";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <NavBanner />
      <Info />
      <Services />
      <DentalCare />
      <Doctors />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
