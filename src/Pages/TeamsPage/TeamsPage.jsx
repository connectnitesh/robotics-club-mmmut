import React, {useEffect, useState} from "react";
import './TeamsStyle.css'
import Card from "./Card";
import ThirdyearContact from './ThirdYear/ThirdyearContact'
import SecondyearContact from './SecondYear/SecondyearContact'
import FinalyearContact from "./FinalYear/FinalyearContact";
import Aos from "aos";
import "aos/dist/aos.css";
import NavMenu from "../../components/NavMenu/NavMenu";
import FooterBar from "../../components/FooterBar/FooterBar"

const TeamsPage = () => {

  const [secYear,setsecYear] = useState(false);
  const [thirdYear,setthirdYear] = useState(false);
  const [finalYear,setfinalYear] = useState(true);

  
  function secYearfunc(){
    setsecYear(true);
    setthirdYear(false);
    setfinalYear(false);
    console.log(secYear, thirdYear, finalYear);
  }
  
  function thirdYearfunc(){
    setthirdYear(true);
    setsecYear(false);
    setfinalYear(false);
    console.log(secYear, thirdYear, finalYear);
  }
  
  function finalYearfunc(){
    setfinalYear(true);
    setsecYear(false);
    setthirdYear(false);
    console.log(secYear, thirdYear, finalYear);
  }

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
    <div className="navforteam">
    <NavMenu />

    </div>
    <nav className="team-uppernav">
      <ul>
        <li><a  onClick={finalYearfunc}>FINAL YEAR</a> </li>
        <li> <a  onClick={thirdYearfunc}>THIRD YEAR</a> </li>
        <li> <a  onClick={secYearfunc}>SECOND YEAR</a> </li>
      </ul>
    </nav>
    <section id="final-year" className={`${finalYear? "" :  "active-teamnow"}`}>
    <div className="team-card">
        <h2 className="team-heading">Final Year Members</h2>
        {finalyearList}
      </div>
    </section>

    <section id="third-year" className={`${thirdYear? "" :  "active-teamnow"}`}>
    <div className="team-card">
        <h2 className="team-heading">Third Year Members</h2>
        {thirdyearList}
      </div>
    </section>
      
      <section id="second-year" className={`${secYear? "" :  "active-teamnow"}`}>
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
