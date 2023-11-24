import React from "react";

import PhotoListItem from './PhotoListItem';


import "../styles/PhotoList.scss";


const PhotoList = ( props ) => {
  const {  photos, toggleFavourite, isFavorited,  openModal } = props;
  
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photoId={photo.id}
          toggleFavourite={toggleFavourite}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          openModal={() => openModal(photo)}
          isFavorited={isFavorited}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
