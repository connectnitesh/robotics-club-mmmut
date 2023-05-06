import React from "react";

const GalleryCard = (props) => {
  return (
    <div class="gallery-image-card">
      <img src={props.image} alt="gallery-img"/>
    </div>
  );
};

export default GalleryCard;
