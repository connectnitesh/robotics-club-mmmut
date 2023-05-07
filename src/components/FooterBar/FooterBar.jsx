import React from "react";
import "./footerbar.css";
import logo from "../../assets/images/general/logorc.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const FooterBar = () => {
  return (
    <div className="footerbar-container">
      <div className="footerbar-col">
        <img
          src={logo}
          height={100}
          width={100}
          alt="logo"
          className="footlogo"
        />
        <h1>Robotics Club</h1>
      </div>
      <div className="footer-side-col">
        <div className="footerbar-col">
          <h3>
            ADDRESS
          </h3>
          <p>Madan Mohan Malaviya University of Technology,Gorakhpur, Gorakhpur, Uttar Pradesh 273010</p>
          
        </div>
        <div className="footerbar-col">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="workshops">Workshops</a>
            </li>
          </ul>
        </div>
        <div className="footerbar-col">
          <h3>
            CONTACTS
            <div className="underline">
              <span />
            </div>
          </h3>
          <div className="social-menu">
            <ul>
              <a href="https://www.facebook.com/roboticsclub.mmmut/" target="_blank">
                <li id="social-twitter">
                  <i><BsFacebook /></i>
                </li>
              </a>
              <a href="https://www.instagram.com/robotics_club_mmmut/?hl=en" target="_blank">
                <li id="social-instagram">
                  <i><BsInstagram /></i>
                </li>
              </a>
              <a href="https://in.linkedin.com/company/robotics-club-mmmut-gorakhpur" target="_blank">
                <li id="social-linkedin">
                  <i><BsLinkedin/> </i>
                </li>
              </a>
              <a href="https://www.youtube.com/results?search_query=robotics+club+mmmut" target="_blank">
                <li id="social-youtube">
                  <i><BsYoutube/> </i>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
