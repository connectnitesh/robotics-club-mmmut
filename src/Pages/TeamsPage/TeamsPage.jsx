import React from "react";
import './TeamsStyle.css'
import Card from "./Card";
import ThirdyearContact from './ThirdYear/ThirdyearContact'

const TeamsPage = () => {

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

  return (
    <>
      
      <div className="team-card">
        <h2 className="team-heading">Third Year Members</h2>
        {thirdyearList}
      </div>
    </>
  );
};

export default TeamsPage;
