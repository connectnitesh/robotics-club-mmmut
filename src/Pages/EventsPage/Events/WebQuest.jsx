import React from "react";
import { useState } from "react";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import NavMenu from "../../../components/NavMenu/NavMenu";
import FooterBar from "../../../components/FooterBar/FooterBar";

const WebQuest = () => {
  const [eform, seteform] = useState(false);

  function handleform() {
    seteform(!eform);
    console.log(eform);
  }

  return (
    <>
      <div className="eventpage-container webq">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{ color: "white" }}>Dev Quest</h1>
        </div>
        <div class="register-btn upper-register">
          <a href="https://linktr.ee/Robomania23">REGISTER NOW</a>
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
              Join us for an exciting event on the world of web
              development! Whether you're an experienced web developer or just
              starting out, this event is the perfect opportunity to learn new
              skills, meet like-minded individuals, and get inspired. No matter
              what your level of experience or area of interest, you're sure to
              find something of value at this event. So mark your calendar,
              spread the word, and join us for an unforgettable day of learning
              and discovery in the exciting world of web development.
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
            <p>Uploaded Soon</p>
          </div>
        </div>
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>schedule</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
            <p>12th - 14th May 2023</p>
          </div>
        </div>
        <div className="event-contact-details">
          <div className="contact-me">
            <h5>
              Anubhav Gupta <span>6386326572</span>
            </h5>
          </div>
          <div className="contact-me">
            <h5>
              Aryan Anand <span>987654321</span>
            </h5>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default WebQuest;
