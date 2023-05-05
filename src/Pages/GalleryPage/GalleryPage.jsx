import React from "react";
import "./GalleryStyle.css";
import GalleryImage from "./GalleryImage";
import GalleryCard from "./GalleryCard";
import { slide as Menu } from 'react-burger-menu';
import img3 from "../../assets/images/general/logorc (2).png";

const GalleryPage = () => {

  const rcImage = GalleryImage.map( (photo) => {
    return <GalleryCard image={photo.src} />
  }) 

  return (
    <>
    <Menu right>
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="events">
        EVENTS
      </a>
      <a className="menu-item" href="workshops">
        WORKSHOPS
      </a>
      <a className="menu-item" href="team">
        TEAM
      </a>
      
    </Menu>
    <div class="app-gallery">
      <div class="gallery-container">
        {rcImage}
      </div>
    </div>
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

export default GalleryPage;
