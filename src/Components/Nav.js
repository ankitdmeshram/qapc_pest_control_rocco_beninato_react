import React from "react";


import emailji from "../Img/email.png";
import phoneji from "../Img/phone-call.png";
import logoji from "../Img/logo.png";
import { Link } from "react-router-dom";
import PopupForm from "./PopupForm";


const Nav = () => {
  return (
    <>
      <section className="gs-header">
        <div className="gs-top-nav container-fluid">
          <div className="container">
            <p>
              <a href="mailto:contact@qapc.com">
                <img
                  src={emailji}
                  className="img-fluid"
                  style={{width: "17px",  marginRight: "5px",}}

                />
                <span className="gs-hide"> contact@qapc.com</span>
              </a>
              <a href="tel:+14168310386">
                <img
                  src={phoneji}
                  className="img-fluid"
                  style={{marginLeft: "20px", marginRight: "5px", width: "17px"}}
                />
                <span className="gs-hide"> +1 (416) 831-0386</span>
              </a>
            </p>
          </div>
        </div>
        <div className="gs-nav " id="navbar_top"
        style={{backgrounColor: "white"}}>
          <nav
            className="navbar navbar-expand-lg navbar-light shadow-lg"
            
          >
            <div className="container">
              <Link className="navbar-brand" to="/" style={{paddingBottom: "0px"}}>
                <img src={logoji} style={{height: "80px"}} alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse gs-nav"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="about">
                      About Us{" "}
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="services">
                      Services{" "}
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="location">
                      Location{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <a
                      className="nav-link nav-link-white gs-btn"
                      // href=""
                      data-toggle="modal"
                      data-target="#exampleModal"
                      style={{color: "white !important", borderRadius: "5px",padding: "5px 20px" }}
                    >
                      Hire Us{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>

    <PopupForm />


    </>
  );
};

export default Nav;
