import React from 'react'
import './laserstrike.css'
import roboGif from '../../../assets/images/events/Hi Robot Sticker - Hi Robot - Discover & Share GIFs.gif';
import newgif from '../../../assets/images/events/newgif.gif'
import { elastic as Menu } from 'react-burger-menu';

const LaserStrike = () => {
  return (
    <>
      <Menu right>
        <a className="menu-item" href="/">
          HOME
        </a>
        <a className="menu-item" href="/">
          EVENTS
        </a>
        <a className="menu-item" href="/">
          GALLERY
        </a>
        <a className="menu-item" href="/">
          CONTACT US
        </a>
      </Menu>


      <div className="maincontainer">
        <div className="heading-h1">
          <img src={roboGif} alt id="img" />
          <h1>LaserStrike</h1>
        </div>
      </div>
      <div id="full">
        <div id="about-page">
          <div class="main">
            <div class="text">DESCRIPTION</div>
            <div class="ntext"></div>
            <img src={newgif} alt="" id="img1" />
          </div>
          <div class="para">
            <p>If you spend hours playing counter strike, Laser Strike is the one for you. A simulation of counter strike, it leaves you thrilled and amazed. Two teams will be fighting simultaneously with the help of a sensor kit and a laser kit and members of one team will have to kill the members of the enemy team.</p>
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
            Let the wars begin! With the increasing popularity of robotic combat sports such as RoboWars and Battle of Bots, many students think about building a fighting robot of their own. If you are crazy enough, then you can build your own fighting machine then here stands your chance , conducted by the <strong>Robotics Club</strong> of MMMUT Gorakhpur. It is savage. It is treacherous. It is a game of style, control, damage and aggression with the robots pitting each other in deadly combat. It is time to concentrate on the hacking and slashing of the robots. Now it is time to rumble. It's the Grand Finale of war. Get ready to feel the chills and shivers down your spine and become a part of Robowars
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

          <a href="#">REGISTER NOW</a>
        </div>

      </div>

    </>
  )
}

export default LaserStrike