import React from "react";

import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { toggleFavourite, isFavorited, imageSource, profile, username, location, openModal } = props;

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        toggleFavourite={toggleFavourite}
        isFavorited={isFavorited}
      />
      <img
        className="photo-list__image"
        src={imageSource}
        alt="User's photograph"
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
