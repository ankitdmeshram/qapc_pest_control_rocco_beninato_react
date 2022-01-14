import React from "react";
import AboutSec from "../Components/AboutSec";
import Breadcumb from "../Components/Breadcumb";
import CTA from "../Components/CTA";
import Review from "../Components/Review";

const About = () => {
  return (
    <>
      <div className="breadcumb">
        <div className="text-center p-4 ">
          <h1>About Us</h1>
        </div>
      </div>

      <AboutSec />
      <Review />
      <CTA />
    </>
  );
};

export default About;
