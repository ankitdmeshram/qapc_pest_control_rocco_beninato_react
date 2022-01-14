import React from "react";
import Form from "./Form";

import moneyback from "../Img/money-back.webp";

const Sidebar = () => {
  return (
    <>
      <div className="col-lg-4 two">
        <div className="sticky-top form-box">
          <div className="gs-form shadow ">

            <Form />
          </div>
          <p style={{ textAlign: "center", paddingTop: "25px" }}>
            <img src={moneyback} className="img-fluid text-center" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
