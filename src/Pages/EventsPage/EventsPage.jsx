import React, {useEffect} from "react";
import "./EventsStyle.css";
import { slide as Menu } from 'react-burger-menu';
import rbText from "../../assets/images/general/robomania-text.png";
import rbRobot from "../../assets/images/general/bg-robomania.png";
import laserStrike from "../../assets/images/events/laser.jpg"
import Aos from "aos";

import img3 from "../../assets/images/general/logorc (2).png";
import "aos/dist/aos.css";

const EventsPage = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);
  return (
    <>
 <Menu right >
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="workshops">
       WORKSHOPS
      </a>
      <a className="menu-item" href="gallery">
        GALLERY
      </a>
      <a className="menu-item" href="team">
        TEAM
      </a>
      
    </Menu>
    <div className="eventPage-container">
      <section className="events-landing">
        <div data-aos="fade-up" className="events-items">
          <img src={rbText} className="rb-text" alt="" />
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates consequatur placeat doloremque soluta saepe possimus optio sit delectus accusamus perferendis et fugiat illum, repellat quisquam velit id vel autem pariatur nam perspiciatis nulla assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo asperiores delectus eius porro mollitia quis expedita! Quos fugiat pariatur officia porro dicta eveniet alias rem exercitationem accusantium, illum facere voluptatem.

         </p>
          
        </div>
        <div data-aos="fade-right" className="landing-details">
          <div className="landing-icons licon1">
            <p>50K+</p>
            <p><i></i>Prize Money</p>
          </div>
          <div className="landing-icons licon2">
            <p>25+</p>
            <p><i></i>Events</p>
          </div>
          <div className="landing-icons licon3">
            <p>42K+</p>
            <p><i></i>Participants</p>
          </div>
        </div>
        <img src={rbRobot} className="rc-robot" alt="" />
      </section>
      <div data-aos="zoom-in" className="rb-events laser-strike" id="laserStrike">
        <h2 className="rs-text" >Laser <br></br><span>Strike</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="laserstrike">View Event</a>
        </div>   
      </div>
      <div data-aos="zoom-in" className="rb-events electro-nfs">
        <h2 className="ls-text">Electro <br></br><span>NFS</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="electronfs">View Event</a>
        </div>   
      </div>
      <div className="rb-events sher-lock">
        <h2 className="rs-text" id="sher-text">Sherlocked <br></br><span></span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="sherlocked">View Event</a>
        </div>   
      </div>
      <div className="rb-events electro-chess">
        <h2 className="ls-text" id="chess-text">Electronic <br></br><span>Chess</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="electronicchess">View Event</a>
        </div>   
      </div>
      <div className="rb-events electro-art">
        <h2 className="rs-text" id="art-text">Electronic <br></br><span>Art</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="electronicart">View Event</a>
        </div>   
      </div>
      <div data-aos="zoom-in" className="rb-events clad-code">
        <h2 className="ls-text">Cladding <br></br><span>the code</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="claddingcode">View Event</a>
        </div>   
      </div>
      <div data-aos="zoom-in" className="rb-events web-quest">
        <h2 className="rs-text">Web <br></br><span>Quest</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <a href="webquest">View Event</a>
        </div>   
      </div>
      <div className="rb-events infor-mal">
        <h2 className="ls-text" id="informals-text">Informals <br></br><span></span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <a href="informals">View Event</a>
        </div>   
      </div>
    </div>
    
<footer>
    <div className="footer-container">
  <div className="col">
    <img src={img3} alt="logo" className="footlogo" />
    <div className="footercontent">
      <h2 className="footerheading">Robotics Club</h2>
    </div>
  </div>
  <div className="footer-side-col">


  <div className="col">
  <h3>
    ADDRESS
    <div className="underline"><span /></div>
  </h3>
  <p>MMMUT, Gorakhpur</p>
  <p className="email-id"><a href="mailto:mgsaryananand2003@gmail.com">mgsaryananand2003@gmail.com</a></p>
  <p className="email-id"><a href="mailto:anubhavgu2002@gmail.com">anubhavgu2002@gmail.com</a></p>
</div>

        <div className="col">
  <h3>HOME</h3>
  <ul>
    <li><a href="#about">About Us</a></li>
    <li>
      <a href="#">Contribute</a>
    </li>
  </ul>
</div>

        <div className="col">
  <h3>
    CONTACTS
    <div className="underline"><span /></div>
  </h3>
  <div className="social-menu">
    <ul>
      <a href="#" target="_blank">
        <li id="social-twitter"><i className="fab fa-2x fa-twitter" /></li>
      </a>
      <a href="#" target="_blank">
        <li id="social-github"><i className="fab fa-2x fa-github" /></li>
      </a>
      <a href="#" target="_blank">
        <li id="social-linkedin"><i className="fab fa-2x fa-linkedin-in" /></li>
      </a>
    </ul>
  </div>
</div>

  </div>
</div>

</footer>
    </>

  );
};

export default EventsPage;
