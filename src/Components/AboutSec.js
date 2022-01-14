import React from "react";
import Form from "./Form";

const AboutSec = () => {
  return (
    <>
      <section className="two">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="pt-5">
                <h4>About Company</h4>
                <h2 className="pt-2">
                  We're Truely Dedicated To Make Your Experience As Much As
                  Simple And Fun As Possible
                </h2>
                <p className="pt-2">
                  (Company Name) established in (Year) with sole interest in
                  pest management business in Durham, York Region, and entire
                  GTA, including Pickering, Ajax, Whitby, Oshawa, Brooklin,
                  Bowmanville, Courtice, Port Perry, and surrounding areas..
                  <br />
                  As a leader in pest control We also treat pest infestations
                  and removal services across the York Region, including
                  Markham, Vaughan, Thornhill, Richmond Hill, Woodbridge,
                  Stouffville, Uxbridge, Newmarket, East Gwillimbury, Maple,
                  Georgina, and King City, north york and Toronto…
                </p>
              </div>
            </div>
            <div className="col-lg-5 pt-5">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSec;
