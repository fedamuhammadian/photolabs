import React, { useState } from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData from '../hooks/useApplicationData';

// functional component for the HomeRoute
const HomeRoute = (props) => {
  const {
    photoData,
    topicData,
    fetchPhotosByTopic,
    toggleFavourite,
    isFavorited,
  } = useApplicationData();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigation isFavorited={isFavorited} onTopicClick={fetchPhotosByTopic} />
      <PhotoList
        photos={photoData}
        topics={topicData}
        openModal={openModal}
        isFavorited={isFavorited}
        toggleFavourite={toggleFavourite}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={closeModal}
          isFavourited={isFavorited.includes(selectedPhoto.id)}
          toggleFavourite={() => toggleFavourite(selectedPhoto.id)}
        />
      )}
    </div>
  );
};


export default HomeRoute;
