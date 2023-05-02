import React from "react";
import "./EventsStyle.css";
import { elastic as Menu } from 'react-burger-menu';
import rbText from "../../assets/images/general/robomania-text.png";
import rbRobot from "../../assets/images/general/bg-robomania.png";
import laserStrike from "../../assets/images/events/laser.jpg"

const EventsPage = () => {
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
    <div className="eventPage-container">
      <section className="events-landing">
        <div className="events-items">
          <img src={rbText} className="rb-text" alt="" />
          <p className="robo-para">
            Robomania is the coalescence of caliber and rewards, technical
            expertise and valor where budding engi Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odit necessitatibus nesciunt
            exercitationem! Incidunt quia iusto totam nobis quis explicabo
            dolore, architecto at fugiat amet voluptatibus. Ab vel eos est
            voluptatibus?</p>
          <div >
            <a href="" className="btn-robomania" ><span>Explore</span></a>
          </div>
        </div>
        <div className="landing-details">
          <div className="landing-icons licon1">
            <p>52L+</p>
            <p><i></i>Prize Money</p>
          </div>
          <div className="landing-icons licon2">
            <p>15+</p>
            <p><i></i>Events</p>
          </div>
          <div className="landing-icons licon3">
            <p>52K+</p>
            <p><i></i>Participants</p>
          </div>
        </div>
        <img src={rbRobot} className="rc-robot" alt="" />
      </section>
      <div className="rb-events laser-strike">
        <h2 className="rs-text">Laser <br></br><span>Strike</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
      <div className="rb-events electro-nfs">
        <h2 className="ls-text">Electro <br></br><span>NFS</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
      <div className="rb-events sher-lock">
        <h2 className="rs-text">Sherlocked <br></br><span></span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
      <div className="rb-events electro-chess">
        <h2 className="ls-text">Electronic <br></br><span>Chess</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
      <div className="rb-events electro-art">
        <h2 className="rs-text">Electronic <br></br><span>Art</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
      <div className="rb-events clad-code">
        <h2 className="ls-text">Cladding <br></br><span>the code</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
      <div className="rb-events web-arquestt">
        <h2 className="rs-text">Web <br></br><span>Quest</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
      <div className="rb-events infor-mal">
        <h2 className="ls-text">Informals <br></br><span></span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="">View Event</a>
        </div>   
      </div>
    </div>
    </>

  );
};

export default EventsPage;
