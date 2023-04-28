import React from "react";
import "./FooterStyle.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Plx from "react-plx";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <ul class="menu">
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
          <li>
            <a href="#sponsor">SPONSORS</a>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <ul class="menu">
          <li>
            <a href="https://www.facebook.com/roboticsclub.mmmut/">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/robotics_club_mmmut/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCq1SGYOxepwOHBE8eQcE_Pg">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/robotics-club-mmmut-gorakhpur/mycompany/">
              <BsLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
