import React from "react";
import { Link } from "react-router-dom";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";

const CladdingCode = () => {
  return (
    <>
      <div className="eventpage-container">
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1>ROBOWARS</h1>
        </div>
      </div>
      <div className="eventpage-section">
        <div id="about-page">
          <div class="main">
            <div class="text">DESCRIPTION</div>
            <div class="ntext"></div>
            <img src={roboGif2} alt="" id="robo2gif" />
          </div>
          <div class="para">
            <p>
              Let the wars begin! With the increasing popularity of robotic
              combat sports such as <strong>RoboWars</strong> and Battle of
              Bots, many students think about building a fighting robot of their
              own. If you are crazy enough, then you can build your own fighting
              machine then here stands your chance , conducted by the{" "}
              <strong>Robotics Club</strong> of <strong>MMMUT Gorakhpur</strong>
              . It is savage. It is treacherous. It is a game of style, control,
              damage and aggression with the robots pitting each other in deadly
              combat. It is time to concentrate on the hacking and slashing of
              the robots. Now it is time to rumble. It's the Grand Finale of
              war. Get ready to feel the chills and shivers down your spine and
              become a part of Robowars
            </p>
          </div>
        </div>
        <div id="format">
          <div class="main">
            <div class="text">FORMAT</div>
            <div class="ntext"></div>
          </div>
          <div class="para" id="para1">
            <ul>
              <li> Rule1 </li>
              <li>Rule2</li>
              <li>Rule3</li>
              <li>Rule4</li>
              <li>Rule5</li>
              <li>Rule6</li>
            </ul>
          </div>
        </div>
        <div id="schedule">
          <div class="main">
            <div class="text">SCHEDULE</div>
            <div class="ntext"></div>
          </div>
          <div class="para" id="para1">
            Let the wars begin! With the increasing popularity of robotic combat
            sports such as RoboWars and Battle of Bots, many students think
            about building a fighting robot of their own. If you are crazy
            enough, then you can build your own fighting machine then here
            stands your chance , conducted by the <strong>Robotics Club</strong>{" "}
            of MMMUT Gorakhpur. It is savage. It is treacherous. It is a game of
            style, control, damage and aggression with the robots pitting each
            other in deadly combat. It is time to concentrate on the hacking and
            slashing of the robots. Now it is time to rumble. It's the Grand
            Finale of war. Get ready to feel the chills and shivers down your
            spine and become a part of Robowars
          </div>
        </div>
        <div id="contact-page">
          <div class="main">
            <div class="text">CONTACT</div>
            <div class="ntext"></div>
          </div>
          <div class="para">
            <ul>
              <li>Aryan Anand (6386804123)</li>
              <li>Anubhav Gupta (6386326572)</li>
            </ul>
          </div>
        </div>
        <div class="btn">
          <Link href="#">REGISTER NOW</Link>
        </div>
      </div>
    </>
  );
};

export default CladdingCode;
