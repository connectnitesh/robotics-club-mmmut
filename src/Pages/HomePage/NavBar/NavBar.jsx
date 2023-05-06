import React, { useState } from "react";
import "./NavStyle.css";
import Rclogo from "../../../assets/images/general/logo.jpg";
import Mmmlogo from "../../../assets/images/general/mmmlogo.png";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [state, setState] = useState(false);
  const [navIcon, setnavIcon] = useState({ icon: <FiMenu /> });

  function handleClick() {
    setState(!state);
    if (state === false) {
      setnavIcon({
        icon: <RxCross1 />,
      });
    } else {
      setnavIcon({
        icon: <FiMenu />,
      });
    }
  }

  return (
    <nav>
      <div className="nav-rc logo-bg">
        <a href="/">
          <img src={Rclogo} alt="" />
        </a>
      </div>
      <div className="nav-items" id="pc-navbar">
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
      <div className={`mob-navbar ${state? "" : "active"}`}>
        <i
          id="bars"
          onClick={handleClick}

        >
          {navIcon.icon}
        </i>
        <ul className={`menu mob-menu  ${state? "" :  "active"}`}>
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
    </nav>
  );
};

export default NavBar;
