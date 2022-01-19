
import React from "react";
import CTA from "../Components/CTA";
import Form from "../Components/Form";
import Review from "../Components/Review";
import ServiceSec from "../Components/ServiceSec";
import Sidebar from "../Components/Sidebar";

const Keswick = () => {
  return (
    <>
      <div className="breadcumb">
        <div className="text-center p-4 ">
          <h1> Pest Control in Keswick</h1>
          <p
            style={{
              color: "white",
              fontSize: "18px",
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            <b>Company Name</b> Pest Control removes pests anywhere in or
            around your home or business in <b> Keswick</b>. We Guarantee removal of pest
             - If they return within given duration, we'll come back for free.
          </p>
          <a className="btn gs-btn mt-2" style={{ color: "white" }}>
            Contact Now
          </a>
        </div>
      </div>

      <section className="service-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <h1>Remove Pests From Your Keswick's Home or Business</h1>
              <p>
                Some of the most frequent pests that infect residential and
                commercial properties are bugs, insects, and rodents. Pests are
                a pain to deal with because of the ruin they produce. They are
                constantly looking for the next house or office to demolish.
                These annoying, uninvited visitors are capable of annihilating
                practically anything in their path. Your office may also include
                a number of areas that are attractive to bugs.
              </p>
              <p>
                Heat, food, and other critical biological activities are needed
                by pests. Most bugs in Canada, particularly in <b>Keswick</b>,
                take refuge in attics and other warm places. <b>Company Name</b>
                is well-versed in these pests and their preferred habitats. We
                have highly trained personnel that can locate all of the
                hideouts and then thoroughly eliminate them. You've come to the
                right place if you're looking for a professional pest control
                service. <b>Company Name</b> is one of <b>Keswick's</b> most
                dependable pest control companies. If you suspect a pest
                infestation, don't wait another second and contact us right
                away.{" "}
              </p>

              <p>
                We recommend that you conduct thorough research before deciding
                on who will come to your home to exterminate pests. When you
                choose <b>Company Name</b>, you will also receive some
                additional perks. 
              </p>
            </div>

            <div className="col-lg-4 two">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <ServiceSec />
      <div style={{ backgroundColor: "rgba(255, 0, 0, 0.02)" }}>
        <Review />
      </div>
      <CTA />
    </>
  );
};

export default Keswick;
