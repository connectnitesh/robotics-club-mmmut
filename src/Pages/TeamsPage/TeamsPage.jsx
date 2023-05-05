import React, {useEffect} from "react";
import './TeamsStyle.css'
import Card from "./Card";
import ThirdyearContact from './ThirdYear/ThirdyearContact'
import ParticleBckg from "../../components/ParticleBckg/ParticleBckg";
import particleconfiga from "./particleconfiga";
import SecondyearContact from './SecondYear/SecondyearContact'
import FinalyearContact from "./FinalYear/FinalyearContact"
import FacultyContact from "./Faculty/FacultyContact"
import DevelopersContact from "./Developers/DevelopersContact";
import { slide as Menu } from 'react-burger-menu';
import img3 from "../../assets/images/general/logorc (2).png";
import Aos from "aos";
import "aos/dist/aos.css";
import Card1 from "./card1";



const TeamsPage = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);

  const facultyList = FacultyContact.map( (members) => {
    return (
        <Card1
        image={members.image}
        name= {members.name}
        position= {members.position}
        club={members.club}
        insta={members.insta}
        fb={members.fb}
        lin={members.lin}
      />
    )
})
  const finalyearList = FinalyearContact.map( (members) => {
    return (
        <Card
        image={members.image}
        name= {members.name}
        position= {members.position}
        insta={members.insta}
        fb={members.fb}
        lin={members.lin}
      />
    )
})
  const thirdyearList = ThirdyearContact.map( (members) => {
      return (
          <Card
          image={members.image}
          name= {members.name}
          position= {members.position}
          insta={members.insta}
          fb={members.fb}
          lin={members.lin}
        />
      )
  })
  const SecondyearList = SecondyearContact.map( (members) => {
    return (
        <Card 
        image={members.image}
        name= {members.name}
        position= {members.position}
        insta={members.insta}
        fb={members.fb}
        lin={members.lin}
      />
    )
})
  const DevelopersList = DevelopersContact.map( (members) => {
    return (
        <Card 
        image={members.image}
        name= {members.name}
        position= {members.position}
        
      />
    )
})


  return (
    <>
      {/* <ParticleBckg myparticle={particleconfiga}/> */}
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a> </li>
        <li><a href="#final-year">Faculty</a> </li>
        <li><a href="#final-year">FINAL YEAR</a> </li>
        <li> <a href="#third-year">THIRD YEAR</a> </li>
        <li> <a href="#second-year">SECOND YEAR</a> </li>
      </ul>
    </nav>
   <div className="humburger">
   <Menu right>
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="#final-year">
        FACULTY
      </a>
      <a className="menu-item" href="#final-year">
        FINAL YEAR
      </a>
      <a className="menu-item" href="#third-year">
        THIRD YEAR
      </a>
      <a className="menu-item" href="#second-year">
        SECOND YEAR
      </a>
    </Menu>
   </div>
    <section id="faculty">
    <div className="team-card">
        <h2 className="team-heading">Faculty</h2>
        {facultyList}
      </div>
    </section>
    <section id="final-year">
    <div className="team-card">
        <h2 className="team-heading">Final Year Members</h2>
        {finalyearList}
      </div>
    </section>

    <section id="third-year">
    <div className="team-card">
        <h2 className="team-heading">Third Year Members</h2>
        {thirdyearList}
      </div>
    </section>
      
      <section id="second-year">
      <div className="team-card">
        <h2 className="team-heading">Second Year Members</h2>
        {SecondyearList}
      </div>
      </section>

      <section id="developers">
      <div className="team-card">
        <h2 className="team-heading">Developers</h2>
        {DevelopersList}
      </div>
      </section>
      
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

export default TeamsPage;
