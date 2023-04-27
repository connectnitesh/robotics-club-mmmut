import React from "react";
import './NavStyle.css';
import Plx from "react-plx";

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
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            easing: "easeinOut",
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale",
              },
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              }
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: -1,
          opacity: "1",
        }}
      >
        <div className="bgforeground1"
          style={{ width: "100%" }}></div>
        {/* <img className="bgforeground1"
          style={{ width: "100%" }}
          src={require("../../../assets/images/general/bgforeground1.png")}
          alt="foreground"
          /> */}
        
      </Plx>
      <Plx 
        parallaxData={[
          {
            start: 0,
            end: 500,
            easing: "easeInOut",
            properties: [
              {
                startValue: 0,
                endValue: -35,
                property: "translateY",
              },
            ],
          },
          {
            start: 0,
            end: 400,
            easing: "ease",
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
          opacity: "1",
        }}
      >
        
      <div className="navbar">
        <div className="nav-brand">
          <a href="/">
            <img
              src={require("../../../assets/images/general/logo.jpg")}
              style={{
                height: 100,
                width: 100,
              }}
              alt=""
            />
          </a>
        </div>
        <div className="nav-items" id="mob-navbar">
          <ul class="menu cf">
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
              {/* <ul class="submenu">
            <li>
              <a href="/">
                FINAL YEAR
              </a>
            </li>
            <li>
              <a href="/">
                THIRD YEAR YEAR
              </a>
            </li>
            <li>
              <a href="/">
                SECOND YEAR
              </a>
            </li>
            <li>
              <a href="/">
                DEVELOPERS
              </a>
            </li>
          </ul> */}
            </li>
          </ul>
        </div>
        <div className="mmmut-logo">
          <a href="">
            <img
              src={require("../../../assets/images/general/mmmlogo.png")}
              style={{
                height: 100,
                width: 100,
              }}
              alt=""
            />
          </a>
        </div>
      </div>
      </Plx>
    </nav>
  );
};

export default NavBar;
