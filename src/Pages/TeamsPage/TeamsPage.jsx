import React, {useEffect} from "react";
import './TeamsStyle.css'
import Card from "./Card";
import ThirdyearContact from './ThirdYear/ThirdyearContact'
import SecondyearContact from './SecondYear/SecondyearContact'
import FinalyearContact from "./FinalYear/FinalyearContact";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import NavMenu from "../../components/NavMenu/NavMenu";
import FooterBar from "../../components/FooterBar/FooterBar"

const TeamsPage = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);

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
    <NavMenu />
    <nav className="team-uppernav">
      <ul>
        <li><Link href="">FINAL YEAR</Link> </li>
        <li> <a href="#third-year">THIRD YEAR</a> </li>
        <li> <a href="#second-year">SECOND YEAR</a> </li>
      </ul>
    </nav>
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
      <FooterBar/>
    </>
  );
};

export default TeamsPage;
