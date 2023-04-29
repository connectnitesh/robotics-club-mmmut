import React, {useEffect} from "react";
import './TeamsStyle.css'
import Card from "./Card";
import ThirdyearContact from './ThirdYear/ThirdyearContact'
import ParticleBckg from "../../components/ParticleBckg/ParticleBckg";
import particleconfiga from "./particleconfiga";
import SecondyearContact from './SecondYear/SecondyearContact'
import Aos from "aos";
import "aos/dist/aos.css";

const TeamsPage = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);

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
      <ParticleBckg myparticle={particleconfiga}/>
      <div className="team-card">
        <h2 className="team-heading">Third Year Members</h2>
        {thirdyearList}
      </div>
      <div className="team-card">
        <h2 className="team-heading">Second Year Members</h2>
        {SecondyearList}
      </div>
    </>
  );
};

export default TeamsPage;
