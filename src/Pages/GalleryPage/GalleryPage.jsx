import React from "react";
import "./GalleryStyle.css";
import GalleryImage from "./GalleryImage";
import GalleryCard from "./GalleryCard";
import { elastic as Menu } from 'react-burger-menu';


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
      <a className="menu-item" href="/">
        EVENTS
      </a>
      <a className="menu-item" href="/">
        GALLERY
      </a>
      <a className="menu-item" href="/">
        CONTACT US
      </a>
      
    </Menu>
    <div class="app-gallery">
      <div class="gallery-container">
        {rcImage}
      </div>
    </div>
    </>
  );
};

export default GalleryPage;
