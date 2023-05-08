import React, { useState } from "react";
import "./NavMenu.css";
import logo from "../../assets/images/general/logorc.png";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const NavMenu = () => {
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
    <div>
      <div className="navcard-container">
        <div className="navcard-left">
          <img src={logo} width={60} height={60} alt="logo" />
          <h1>Robotics Club</h1>
        </div>
        <div className={`navcard-right  ${state? "" :  "active-mobmenu"}`}>
          <ul className="navcard-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="events">Events</a>
            </li>
            <li>
              <a href="workshops">Workshop</a>
            </li>
            <li>
              <a href="gallery">Gallery</a>
            </li>
            <li>
              <a href="team">Team</a>
            </li>
          </ul>
        </div>
      </div>
      <div id='mob-menu' className="mob-menubar">
        <i id="mobmenu-bars" onClick={handleClick}>
          {navIcon.icon}
        </i>
      </div>
    </div>
  );
};

export default NavMenu;
