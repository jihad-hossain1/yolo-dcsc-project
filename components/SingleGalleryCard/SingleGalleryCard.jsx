import React from "react";

const SingleGalleryCard = ({ itm }) => {
  return (
    <div className="">
      <img
        className="rounded-lg object-cover "
        src={itm?.img}
        alt="gallery photo"
      />
    </div>
  );
};

export default SingleGalleryCard;
