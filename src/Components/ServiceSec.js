import React from "react";
import { Link } from "react-router-dom";


import antji from "../Img/antji.png";
import bedbugs from "../Img/bed-bugs.png";
import centipedesji from "../Img/centipedesji.png";
import cockroachesji from "../Img/cockroachesji.png";
import miceji from "../Img/miceji.png";
import mosquitoesji from "../Img/mosquitoesji.png";
import raccoonji from "../Img/raccoonji.png";
import ratji from "../Img/ratji.png";
import spiderji from "../Img/spiderji.png";
import squirrel from "../Img/squirrel.png";
import waspji from "../Img/waspji.png";

const ServiceSec = () => {
  return (
    <>
      <section className="three">
        <div className="container">
          <div className="text-center">
            <h1>Our Services</h1>
            <h5>World's best tourist destinations</h5>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={miceji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/mice-control">MICE REMOVAL</Link>
                  </h5>
                  <p>
                    Mice can cause harm to food items, to your property, and to
                    your grains too on a large scale. And they are known to
                    spread various diseases like fever, colera, plague and many
                    more.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={ratji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/rat-control">RAT REMOVAL</Link>
                  </h5>
                  <p>
                    Rats are larger than mice and their habits are different.
                    Rats can infest roofs, attics and also to upper floors of
                    buildings. They are also carriers of diseases and can harm
                    your property.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={bedbugs} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/bed-bug-exterminator">BED BUGS</Link>
                  </h5>
                  <p>
                    Bed Bugs as the name tells they are commonly present in the
                    areas where we sleep. They are hard to find and detect. We
                    have effective measures and techniques for the reduction of
                    bed bugs and their eggs.{" "}
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={antji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/ants-exterminator">ANTS EXTERMINATOR</Link>
                  </h5>
                  <p>
                    Ants are wicked in nature. They multiply rapidly and they
                    can cause a serious damage to people and property like holes
                    in fabrics and floors, destruction of foods, wires etc.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={cockroachesji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/cockroaches-exterminator">COCKROACHES</Link>
                  </h5>
                  <p>
                    Cockroaches spread various diseases and infect food items,
                    water and other edible things. They can be a major danger
                    for health and hygiene.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={waspji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/wasps-removal">WASPS REMOVAL</Link>
                  </h5>
                  <p>
                    wasps can be dangerous. In fact stings can even lead to
                    death. They can build their nests anywhere at home and they
                    enter through improper concealed doors and windows.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={mosquitoesji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/mosquitoes-control">MOSQUITOES CONTROL</Link>
                  </h5>
                  <p>
                    Mosquitoes are known to cause many diseases like dengue,
                    Malaria and various others. They are danger for health of
                    public also to the surrounding environment.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={spiderji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/spiders-control">SPIDERS CONTROL</Link>
                  </h5>
                  <p>
                    Though most spiders are venomous but very few are threat to
                    human. But spiders build webs at different places of homes
                    and offices which is very unaesthetic to look at.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={centipedesji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/centipedes-removal">CENTIPEDES CONTROL</Link>
                  </h5>
                  <p>
                    They are mostly present in cold places like under a stone,
                    piles of grass and other damp places but they can cause
                    annoyance as they can invade house properties.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={raccoonji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/raccoon-removal">RACCOONS CONTROL</Link>
                  </h5>
                  <p>
                    Raccoons typically get into household garbage, they can make
                    a lot of racket, they carry many diseases such as distemper
                    and rabies that are passed to both humans and pets if
                    bitten.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={squirrel} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/squirrel-removal">SQUIRRELS CONTROL</Link>
                  </h5>
                  <p>
                    Squirrels are very cute characters, but they are not
                    household pets and can be quite disruptive to your home
                    particularly if they have already discovered a way into your
                    house.
                  </p>
                  <p>
                    <a
                      href="#"
                      className="btn gs-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSec;
