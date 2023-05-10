import React from "react";
import NavMenu from "../../../components/NavMenu/NavMenu";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import FooterBar from "../../../components/FooterBar/FooterBar";

const CladdingCode = () => {
  return (
    <>
      <div className="eventpage-container cld">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{ color: "white" }}>Cladding the Code</h1>
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
              Join us for an exciting event dedicated to the world of coding!
              Whether you're a seasoned coder or just starting out, this event
              is the perfect opportunity to learn new skills, network with
              like-minded individuals, and get inspired. This event will consist
              of both a quiz and a coding round, designed to challenge your
              knowledge and coding abilities. The quiz round will cover a wide
              range of coding concepts and principles, testing your
              understanding of programming languages, data structures,
              algorithms, and more. The coding round will challenge you to write
              efficient, well-structured code to solve a variety of real-world
              problems.
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
          <a href="https://forms.gle/kgmdWG3ercSRXrcPA">
            Click here to Register
          </a>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default CladdingCode;
