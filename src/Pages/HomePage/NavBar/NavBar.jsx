import React from "react";
import "./NavStyle.css";
import Rclogo from "../../../assets/images/general/logo.jpg";
import Mmmlogo from "../../../assets/images/general/mmmlogo.png";

const NavBar = () => {
  function myFunction() {
    var x = document.getElementById("mob-navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <nav>
      <div className="nav-rc logo-bg">
        <a href="/">
          <img src={Rclogo} alt="" />
        </a>
      </div>
      <div className="nav-items" id="mob-navbar">
        <ul class="menu">
          <li>
            <a href="events">EVENTS</a>
          </li>
          <li>
            <a href="workshops">WORKSHOPS</a>
          </li>
          <li>
            <a href="gallery">GALLERY</a>
          </li>
          <li>
            <a href="team">TEAM</a>
          </li>
        </ul>
      </div>
      <div className="nav-mmm logo-bg">
        <a href="/">
          <img
            src={Mmmlogo}
            style={{
              height: 100,
              width: 100,
            }}
            alt=""
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
