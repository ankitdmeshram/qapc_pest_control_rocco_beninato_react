import React from "react";
import Contacts from "../Components/Contacts";
import CTA from "../Components/CTA";
import Review from "../Components/Review";



const Contact = () => {
  return (
    <>
      <div className="breadcumb">
        <div className="text-center p-4 ">
          <h1>Contact Us</h1>
        </div>
      </div>

    <Contacts />

        

      <Review />
      <CTA />
    </>
  );
};

export default Contact;
