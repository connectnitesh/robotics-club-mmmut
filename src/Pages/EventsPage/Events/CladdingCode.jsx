import React from "react";
import { useState } from "react";
import NavMenu from "../../../components/NavMenu/NavMenu";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import FooterBar from "../../../components/FooterBar/FooterBar";

const CladdingCode = () => {

  
  const [eform,seteform]=useState(false);

  function handleform(){
      seteform(!eform);
      console.log(eform);
  }

  return (
    <>
      <div className="eventpage-container cld">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{color: "white"}}>Cladding the Code</h1>
        </div>
        <div class="register-btn upper-register">
          <a href="#register-form">REGISTER NOW</a>
        </div>
      </div>
      <div className="eventpage-section">
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>DESCRIPTION</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
            <p>
            <strong>Cladding the code</strong> refers to the process of adding an additional layer of complexity or functionality to an existing codebase, in order to protect it from bugs, security vulnerabilities, or other issues. This involves identifying areas where additional functionality is needed, designing and implementing new code, and testing and debugging to ensure that everything works smoothly. It's a challenging task that requires technical expertise and creativity, but can help to keep a codebase effective and relevant.
            </p>
          </div>
        </div>
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>format</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
            <p>
              Uploaded Soon
            </p>
          </div>
        </div>
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>schedule</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
            <p>
              12th - 14th May 2023
            </p>
          </div>
        </div>
        <div className="event-contact-details">
        <div className="contact-me">
            <h5>
              Nitesh Rawat <span>8090684923</span>
            </h5>
          </div>
          <div className="contact-me">
            <h5>
              Aryan Anand <span>987654321</span>
            </h5>
          </div>
        </div>
        <div className="register-btn" id="register-form">
        <a  onClick={handleform}>Click here to Register</a> 

        </div>
        <div className={ `registration-form ${eform? "" : "active-form" }`}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfEPCdzWP48SSYjBLOTy4yOnp_3j3WS9FsU7k3j6xjVahgqyw/viewform?embedded=true" scrolling='no'  width="640" height="1512" frameborder="0" marginheight="0"  marginwidth="0">Loading…</iframe>
        </div>

      </div>
      <FooterBar/>
    </>
  );
};

export default CladdingCode;
