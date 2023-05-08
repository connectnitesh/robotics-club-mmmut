import React from "react";
import "./EventsStyle.css";
import { motion } from "framer-motion";
import rbText from "../../assets/images/general/robomania-text.png";
import rbRobot from "../../assets/images/general/bg-robomania.png";
import laserStrike from "../../assets/images/events/laser.jpg"
import NavMenu from "../../components/NavMenu/NavMenu";
import FooterBar from "../../components/FooterBar/FooterBar";

const EventsPage = () => {
  return (
    <>

    <div className="eventPage-container">
      <NavMenu />
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
            <a href="#laserStrike" className="btn-robomania" ><span>Explore</span></a>
          </div>
        </div>
        <div className="landing-details">
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
      <div className="rb-events laser-strike" id="laserStrike">
        <motion.h2 className="rs-text" animate={{ x: [50, 150, 50], opacity: 0.9, scale: 0.9 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                    repeat: Infinity,
                }}
                initial={{ opacity: 0.7, scale: 0.7 }}
                >Laser <br></br><span>Strike</span> </motion.h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="laserstrike">View Event</a></div> 
        </div>    
      </div>
      <div className="rb-events electro-nfs">
        <h2 className="ls-text">Electro <br></br><span>NFS</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="electronfs">View Event</a></div> 
        </div>   
      </div>
      <div className="rb-events sher-lock">
        <h2 className="rs-text">Sherlocked <br></br><span></span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="sherlocked">View Event</a></div> 
        </div>   
      </div>
      <div className="rb-events electro-chess">
        <h2 className="ls-text">Electronic <br></br><span>Chess</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="electronicchess">View Event</a></div> 
        </div>     
      </div>
      <div className="rb-events electro-art">
        <h2 className="rs-text">Electronic <br></br><span>Art</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="electronicart">View Event</a></div> 
        </div>     
      </div>
      <div className="rb-events clad-code">
        <h2 className="ls-text">Cladding <br></br><span>the code</span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="claddingcode">View Event</a></div> 
        </div>    
      </div>
      <div className="rb-events web-quest">
        <h2 className="rs-text">Web <br></br><span>Quest</span> </h2>
        <img src={laserStrike} className="rcevent-img ls-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="webquest">View Event</a></div> 
        </div>     
      </div>
      <div className="rb-events infor-mal">
        <h2 className="ls-text">Informals <br></br><span></span> </h2>
        <img src={laserStrike} className="rcevent-img rs-img" alt="" />
        <div className="events-btn">
          <div className="laser-btn"><a href="informals">View Event</a></div> 
        </div>    
      </div>
    </div>
    <FooterBar />
    </>

  );
};

export default EventsPage;
