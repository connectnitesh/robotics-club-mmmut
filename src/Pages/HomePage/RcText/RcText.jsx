import React from "react";
import './RctextStyle.css'
import Plx from "react-plx";

const RcText = () => {
  return (
    <div>
      <Plx className="rctext-container"
        parallaxData={[
          {
            start: 0,
            end: 200,
            easing: "easeInOut",
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
          
        ]}
        
      >
        <h1 className="heading">Robotics Club </h1>
          <h5 className="heading" id="soon">
            MMMUT Gorakhpur
          </h5>
      </Plx>
    </div>
  );
};

export default RcText;
