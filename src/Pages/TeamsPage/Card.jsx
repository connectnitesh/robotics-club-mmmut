import React from "react";
import './TeamsStyle.css'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Card = (props) => {
  return (
      <div className="container">
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
