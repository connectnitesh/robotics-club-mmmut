import React from "react";
import { useState } from "react";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import NavMenu from "../../../components/NavMenu/NavMenu";
import FooterBar from "../../../components/FooterBar/FooterBar";

const ElectroNfs = () => {

  const [eform,seteform]=useState(false);

  function handleform(){
      seteform(!eform);
      console.log(eform);
  }

  return (
    <>
      <div className="eventpage-container enfs">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1 style={{color: "white"}}>Electro Nfs</h1>
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
            "Need For Speed brought to life....Get Ready to experience more thrilling,more exciting larger than life gaming with the club's newly introduced event NFS,gripping you more and more with its magnanimous setup both literally and metaphorically thrust your control skils at the stearing and race your opponent to the finish for a win.....!"
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
       

      </div>
      <FooterBar/>
    </>
  );
};

export default ElectroNfs;
