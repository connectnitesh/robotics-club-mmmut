import React from 'react'
import { useState } from "react";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import NavMenu from '../../../components/NavMenu/NavMenu';
import FooterBar from '../../../components/FooterBar/FooterBar';

const WebQuest = () => {

  const [eform,seteform]=useState(false);

  function handleform(){
      seteform(!eform);
      console.log(eform);
  }

  return (
    <>
      <div className="eventpage-container webq">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{color: "white"}}>Web Quest</h1>
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
            The <strong>Robotics Club at MMMUT</strong> is organizing web quest, an event that encourages collaboration and innovation in web development. Participants will work in teams to create functional and innovative web-based solutions within a specific timeframe. The web quest will provide an opportunity for participants to showcase their skills, learn new technologies, and network with others in the tech industry. By organizing this event, the Robotics Club at MMMUT is promoting creativity, problem-solving, and community building in the field of web development.
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
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfEPCdzWP48SSYjBLOTy4yOnp_3j3WS9FsU7k3j6xjVahgqyw/viewform?embedded=true" scrolling='no'  width="640" height="1512" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>

      </div>
      <FooterBar/>
    </>
  )
}

export default WebQuest