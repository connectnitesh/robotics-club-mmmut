import React from 'react'
import { Link } from "react-router-dom";
import "./EventStyle.css";
import roboGif from "../../../assets/images/events/robotgif.gif";
import roboGif2 from "../../../assets/images/events/robotgif2.gif";
import NavMenu from '../../../components/NavMenu/NavMenu';

const WebQuest = () => {
  return (
    <>
      <div className="eventpage-container">
        <NavMenu />
        <div className="eventpage-hero">
          <img src={roboGif} alt="robogif" />
          <h1>tekken</h1>
        </div>
        <div class="register-btn upper-register">
          <Link href="">REGISTER NOW</Link>
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
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>format</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
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
        <div className="eventpage-description">
          <div class="eventpage-description-left">
            <h2>schedule</h2>
            <div class="text-clip"></div>
            <img src={roboGif2} alt="robogif" />
          </div>
          <div class="eventpage-description-right">
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
        <div className="event-contact-details">
          <div className="contact-me">
            <h5>
              Name <span>987654321</span>
            </h5>
          </div>
          <div className="contact-me">
            <h5>
              Name <span>987654321</span>
            </h5>
          </div>
        </div>
        <div class="register-btn">
          <Link href="">REGISTER NOW</Link>
        </div>
      </div>
    </>
  )
}

export default WebQuest