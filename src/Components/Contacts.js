import React from "react";
import Form from "./Form";

import location_b from '../Img/location-b.png';
import phone_call from '../Img/phone-call-b.png';
import mailji from '../Img/mail.png';

const Contacts = () => {
  return (
    <>
      <section className="main-contact">
        <div className="container">
          <div className="row shadow pr-2 pl-2">
            <div className="col-lg-6 pt-5">
              <h3>
                {" "}
                <b> Contact Us </b>{" "}
              </h3>

              <p>
                Contact us today for your free quote in Toronto, Durham Region,
                York Region, and all the GTA! Our team of specialized pest
                exterminators are ready to help you today.
              </p>

              <p className="pt-3">
                {" "}
                <img className="img-fluid" src={location_b} /> &nbsp;
                Kalyan, Thane, Mumbai, Maharashtra, <br /> India, Asia, World
              </p>
              <p>
                {" "}
                <img className="img-fluid" src={phone_call} />{" "}
                &nbsp; +91 93720 96952
              </p>
              <p>
                {" "}
                <img className="img-fluid" src={mailji} /> &nbsp;
                info@example.com
              </p>
            </div>

            <div className="col-lg-6  ">
              <div>
                <div className="two">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;


