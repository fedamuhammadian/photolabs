import React from "react";

import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";




const PhotoListItem = ({ photo, toggleFavourite, imageSource, profile, username, location, openModal }) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton
      photo={photo}
        toggleFavourite={toggleFavourite}
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt="User's photo"
         onClick={openModal}
      />
      <section className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt="User's profile"
        />
        <div className="photo-list__user-info">{username}
          <div className="photo-list__user-location">{location.city}, 
          {location.country}</div>
        </div>
      </section>
    </li>
    
  );
};

export default PhotoListItem;
