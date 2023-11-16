import React from "react";

import PhotoListItem from './PhotoListItem';
import useApplicationData from "hooks/useApplicationData";

import "../styles/PhotoList.scss";


const PhotoList = ({ photos, toggleFavourite, openModal, PhotoDetailsModal, setDisplayModal, setPhotoData, setTopicData, isFavorited }) => {
  const { photoData } = useApplicationData();
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photoData={photoData}
          toggleFavourite={toggleFavourite}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          openModal={() => openModal(photo)}
          PhotoDetailsModal={PhotoDetailsModal}
          setDisplayModal={setDisplayModal}
          setPhotoData={setPhotoData}
          setTopicData={setTopicData}
          isFavorited={isFavorited}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
