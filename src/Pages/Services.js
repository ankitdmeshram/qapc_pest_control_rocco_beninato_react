import React from "react";
import CTA from "../Components/CTA";
import Review from "../Components/Review";
import ServiceSec from "../Components/ServiceSec";

const Services = () => {
  return (
    <>
     <div className="breadcumb">
        <div className="text-center p-4 ">
          <h1>Services</h1>
        </div>
      </div>
        <ServiceSec />
      <Review />
      <CTA />
    </>
  );
};

export default Services;
