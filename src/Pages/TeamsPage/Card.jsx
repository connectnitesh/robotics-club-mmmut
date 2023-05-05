import React, {useEffect} from "react";
import './TeamsStyle.css'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  useEffect(()=>{
    Aos.init({duration: 200});
  },[]);
  return (
      <div className="card-container">
        <div className="card cardcnt">
          <div className="content">
            <div className="imgBx">
              <img src={props.image} />
            </div>
            <div className="contentBx">
              <h3>
                {props.name}
                <br />
                <span>{props.position}</span>
              </h3>
            </div>
          </div>
          <ul className="sci">
            <li>
              <a href={props.insta}><BsInstagram /></a>
            </li>
            <li>
              <a href={props.lin}><BsLinkedin /></a>
            </li>
            <li>
              <a href={props.fb}><BsFacebook /></a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Card;
