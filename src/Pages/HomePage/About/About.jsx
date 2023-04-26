import React from 'react'
import './AboutStyle.css'

const About = () => {
  return (
    <section id='about'>
    <div className='about-sec'>   
        <h1>About Us</h1>
        <h3>Robotics club provides an opportunity for students to supplement their education with hands-on experience in integration engineering. From the past 12 years we engage our students with active participation in various workshops, contests and tutorials to develop their interest in Robotics.
        </h3>
        <h3>The club carries forward its vision and ideas by continuously creating hotspots where pool of technical knowledge meets via workshops and an annually organized event ROBOMANIA where the club members present events to the students which require plethora of practical implementation of concepts.
Our Vision mainly is to:-
        </h3>
        <div className="vision">
          <div className="vision-img">
          <img style={{height:400, width:600}} src={require("../../../assets/images/gallery/rcian.jpg")} alt="" />
          </div>
          {/* <img src="" alt="" /> */}
          <div className="vision-items">
            <h3 className='vision-content'>Explore</h3>
            <h3 className='vision-content'>Develope</h3>
            <h3 className='vision-content'>Inovate</h3>
          </div>
        </div>
        <h3>The Club offers indispensible guidance, workshops and tutorials along with tools, equipments, components and workspace. The family meets periodically to discuss over matters such as the management of the workspace, workshops, projects and competitions. We welcome anyone, with or without prior knowledge, who wishes to be a part of this fraternity.</h3>
        <h3>We firmly believe in working in a planned, organized and disciplined manner that helps us in risk free management. The proceedings of the club are all pre-planned and run smoothly according to the rules. Well defined goals, an organized and disciplined work structure and motivated members are the features of the club that have helped the club to grow to a level where we see it now. The club today is an active platform for students to display and develop their practical machine building skills and knowledge.</h3>
    </div>
    </section>
  )
}

export default About