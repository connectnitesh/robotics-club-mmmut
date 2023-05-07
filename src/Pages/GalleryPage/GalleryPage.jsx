import React from "react";
import "./GalleryStyle.css";
import GalleryImage from "./GalleryImage";
import GalleryCard from "./GalleryCard";
import NavMenu from "../../components/NavMenu/NavMenu";

const GalleryPage = () => {

  const rcImage = GalleryImage.map( (photo) => {
    return <GalleryCard image={photo.src} />
  }) 

  return (
    <>
    <div className="gallery-bckg">
    <NavMenu />

    <div class="app-gallery">
      <div class="gallery-container">
        {rcImage}
      </div>
    </div>
    </div>
   
    </>
  );
};

export default GalleryPage;
