import React, {useEffect} from "react";
import "./AboutStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";



const About = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);

  return (
    <section className="about-sec" id="about">
      <div data-aos ="fade-right"><h1>About Us</h1></div>
      <div data-aos="fade-up"><h3>
        Robotics club provides an opportunity for students to supplement their
        education with hands-on experience in integration engineering. From the
        past 12 years we engage our students with active participation in
        various workshops, contests and tutorials to develop their interest in
        Robotics.
      </h3></div>
      <div data-aos="fade-up"><h3>
        The club carries forward its vision and ideas by continuously creating
        hotspots where pool of technical knowledge meets via workshops and an
        annually organized event ROBOMANIA where the club members present events
        to the students which require plethora of practical implementation of
        concepts. Our Vision mainly is to:-
      </h3></div>
      <div className="vision">
        <div data-aos="fade-right" className="vision-img">
          <img
            src={require("../../../assets/images/gallery/rcian.jpg")}
            alt=""
          />
        </div>
        {/* <img src="" alt="" /> */}
        <div data-aos="fade-left" className="vision-items">
          <h3 className="vision-content"><a href="https://linktr.ee/Robomania23">Robomania 23</a></h3>
          <h3 className="vision-content"><a href="https://www.instagram.com/robotics_club_mmmut/?hl=en">Instagram</a></h3>
          <h3 className="vision-content"><a href="https://www.youtube.com/channel/UCq1SGYOxepwOHBE8eQcE_Pg">Youtube</a></h3>
        </div>
      </div>
      <div data-aos="fade-up"><h3>
        The Club offers indispensible guidance, workshops and tutorials along
        with tools, equipments, components and workspace. The family meets
        periodically to discuss over matters such as the management of the
        workspace, workshops, projects and competitions. We welcome anyone, with
        or without prior knowledge, who wishes to be a part of this fraternity.
      </h3></div>
      <div data-aos="fade-up"><h3>
        We firmly believe in working in a planned, organized and disciplined
        manner that helps us in risk free management. The proceedings of the
        club are all pre-planned and run smoothly according to the rules. Well
        defined goals, an organized and disciplined work structure and motivated
        members are the features of the club that have helped the club to grow
        to a level where we see it now. The club today is an active platform for
        students to display and develop their practical machine building skills
        and knowledge.
      </h3></div>
    </section>
  );
};

export default About;
