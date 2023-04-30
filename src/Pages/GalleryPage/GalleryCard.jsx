import React from "react";

const GalleryCard = (props) => {
  return (
    <div class="gallery-image-card">
      <img src={props.image} />
    </div>
  );
};

export default GalleryCard;
