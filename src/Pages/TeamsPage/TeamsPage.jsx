import React, {useEffect} from "react";
import './TeamsStyle.css'
import Card from "./Card";
import ThirdyearContact from './ThirdYear/ThirdyearContact'
import ParticleBckg from "../../components/ParticleBckg/ParticleBckg";
import particleconfiga from "./particleconfiga";
import SecondyearContact from './SecondYear/SecondyearContact'
import FinalyearContact from "./FinalYear/FinalyearContact";
import FacultyContact from "./Faculty/FacultyContact"
import { elastic as Menu } from 'react-burger-menu';
import Aos from "aos";
import "aos/dist/aos.css";

const TeamsPage = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);

  const facultyList = FacultyContact.map( (members) => {
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

  return (
    <>
      {/* <ParticleBckg myparticle={particleconfiga}/> */}
    <nav className="navbar">
      <ul>
        <li><a href="#final-year">Faculty</a> </li>
        <li><a href="#final-year">FINAL YEAR</a> </li>
        <li> <a href="#third-year">THIRD YEAR</a> </li>
        <li> <a href="#second-year">SECOND YEAR</a> </li>
      </ul>
    </nav>
   <div className="humburger">
   <Menu right>
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
    </>
  );
};

export default TeamsPage;
