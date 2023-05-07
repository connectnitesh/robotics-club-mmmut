import React from "react";
import "./footerbar.css";
import logo from "../../assets/images/general/logorc.png";

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
          <p>MMMUT, Gorakhpur</p>
          <p className="email-id">
            <a href="mailto:anubhavgu2002@gmail.com">anubhavgu2002@gmail.com</a>
          </p>
        </div>
        <div className="footerbar-col">
          <h3>HOME</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#">Contribute</a>
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
              <a href="#" target="_blank">
                <li id="social-twitter">
                  <i className="fab fa-2x fa-twitter" />
                </li>
              </a>
              <a href="#" target="_blank">
                <li id="social-github">
                  <i className="fab fa-2x fa-github" />
                </li>
              </a>
              <a href="#" target="_blank">
                <li id="social-linkedin">
                  <i className="fab fa-2x fa-linkedin-in" />
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
