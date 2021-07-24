import React from "react";
import Amenities from "./Amenities";
import Client from "./Client";
import Contact from "./Contact";
import Disclammer from "./Disclammer";
import Footer from "./Footer";
import Header from "./Header";
import Location from "./Location";
import Overview from "./Overview";

const index = () => {
  return (
    <div>
      <Header />
      <div id="overview">
        <Overview />
      </div>
      <div id="amenities">
        <Amenities />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="testimonials">
        <Client />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Disclammer />
      <Footer />
    </div>
  );
};

export default index;
