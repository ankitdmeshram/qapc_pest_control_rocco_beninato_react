import React from "react";
import { Link } from "react-router-dom";
import CTA from "../Components/CTA";

import phone_call from "../Img/phone-call-b.png";

const Location = () => {
  function phone() {
    return (
      <>
        <p className="gs-link">
          <a href="tel:+1(416)8310386">
            {" "}
            <img className="img-fluid city-icon" src={phone_call} /> &nbsp; +1
            (416) 831-0386
          </a>{" "}
        </p>
      </>
    );
  }

  return (
    <>
      <div className="breadcumb">
        <div className="text-center p-4  ">
          <h1> FIND YOUR LOCAL PEST CONTROL EXPERT</h1>
          <h5>World's Best Bed Bug Removal</h5>
        </div>
      </div>

      <section className="gs-cities pt-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-ajax">Pest Control Ajax</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Ajax and surrounding
                    areas.
                  </p>
                  {phone()}
                  <Link to="/pest-control-in-ajax" className="btn gs-btn">
                    View Ajax
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-aurora">
                      Pest Control Aurora
                    </Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Aurora and
                    surrounding areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-aurora" className="btn gs-btn">
                    View Aurora
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-bradford">Pest Control Bradford</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Bradford and surrounding
                    areas.
                  </p>
                  {phone()}
                  <Link to="/pest-control-in-bradford" className="btn gs-btn">
                    View Bradford
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-bowmanville">Pest Control Bowmanville</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Bowmanville and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-bowmanville" className="btn gs-btn">
                    View Bowmanville
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-clarington">Pest Control Clarington</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Clarington and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-clarington" className="btn gs-btn">
                    View Clarington
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-courtice">Pest Control Courtice</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Courtice and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-courtice" className="btn gs-btn">
                    View Courtice
                  </Link>
                </div>
              </div>
            </div>



            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-durham">Pest Control Durham</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Durham and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-durham" className="btn gs-btn">
                    View Durham
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-east-gwillimbury">Pest Control East Gwillimbury</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in East Gwillimbury and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-east-gwillimbury" className="btn gs-btn">
                    View East Gwillimbury
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-east-york">Pest Control East York</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in East York and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-east-york" className="btn gs-btn">
                    View East York
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-etobicoke">Pest Control Etobicoke</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Etobicoke and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-etobicoke" className="btn gs-btn">
                    View Etobicoke
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-georgina">Pest Control Georgina</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Georgina and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-georgina" className="btn gs-btn">
                    View Georgina
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-king-city">Pest Control King City</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in King City and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-king-city" className="btn gs-btn">
                    View King City
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-maple">Pest Control Maple</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Maple and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-maple" className="btn gs-btn">
                    View Maple
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-markham">Pest Control Markham</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Markham and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-markham" className="btn gs-btn">
                    View Markham
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-mount-albert">Pest Control Mount Albert</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Mount Albert and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-mount-albert" className="btn gs-btn">
                    View Mount Albert
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


            <div className="col-lg-4 gs-city-box">
              <div className=" shadow rounded ">
                <div className="card-body">
                  <h2 className="card-title gs-bold ">
                    <Link to="/pest-control-in-keswick">Pest Control Keswick</Link>{" "}
                  </h2>
                  <p className="card-text">
                    Providing best pest control services in Keswick and surrounding
                    areas.
                  </p>
                  {phone()}

                  <Link to="/pest-control-in-keswick" className="btn gs-btn">
                    View Keswick
                  </Link>
                </div>
              </div>
            </div>


         


          </div>
        </div>
      </section>


    <CTA />

    </>
  );
};

export default Location;
