import React from "react";
import "./GalleryStyle.css";
import GalleryImage from "./GalleryImage";
import GalleryCard from "./GalleryCard";

const GalleryPage = () => {

  const rcImage = GalleryImage.map( (photo) => {
    return <GalleryCard image={photo.src} />
  }) 

  return (
    <>
    
    <div class="app-gallery">
      <div class="gallery-container">
        {rcImage}
      </div>
    </div>
   
    </>
  );
};

export default GalleryPage;
