import React from 'react'

import facebook from "../Img/facebook.png";
import instagram from "../Img/instagram.png";
import twitter from "../Img/twitter.png";
import youtube from "../Img/youtube.png";

import location from "../Img/location.png"
import email from "../Img/email.png"
import phone from "../Img/phone-call.png"



export const Footer = () => {
    return (
        <>
             <footer>
        <div className="container">

            <div className="row">
                <div className="col-lg-3">
                    <p className="p-fot"> (Company Name) established in (Year) with sole interest in pest management
                        business in Toronto

                    </p>
                    <p className="social-icon">
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={youtube} alt="youtube" />
                    </p>
                </div>


                <div className="col-lg-3 gs-pl-4">
                    <div className="gs-pl-4">
                        <h4>Services</h4>
                        <ul>
                            <li>
                                <a href="#">Pest Control Services</a>
                            </li>
                            <li>
                                <a href="#">Termite control</a>
                            </li>
                            <li>
                                <a href="#">Bed bugs treatment</a>
                            </li>
                            <li>
                                <a href="#">Wood borer</a>
                            </li>
                            <li>
                                <a href="#">Honey comb</a>
                            </li>
                            <li>
                                <a href="#">Rodent control</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-3 gs-pl-4">
                    <div className="gs-pl-4">
                        <h4>Quick Link</h4>
                        <ul>
                            <li>
                                <a href="#">Pest Control Services</a>
                            </li>
                            <li>
                                <a href="#">Termite control</a>
                            </li>
                            <li>
                                <a href="#">Bed bugs treatment</a>
                            </li>
                            <li>
                                <a href="#">Wood borer</a>
                            </li>
                            <li>
                                <a href="#">Honey comb</a>
                            </li>
                            <li>
                                <a href="#">Rodent control</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-3 gs-pl-4">
                    <h4>
                        Contacts
                    </h4>
                    <p className="pt-3"> <img src={location} className="img-fluid ico" alt="phone" />&nbsp; Kalyan,
                        Thane, Mumbai, Maharashtra, India, Asia, World</p>
                    <p> <img src={phone} className="img-fluid ico" alt="phone" />&nbsp; +91 93720 96952</p>
                    <p> <img src={email} className="img-fluid ico" alt="phone"/> &nbsp; info@example.com</p>
                </div>


            </div>

        </div>
    </footer>
        </>
    )
}
