import React from 'react';


import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';




const App = () => {
  const {
    isModalOpen,
    selectedPhoto,
    isFavorited,
    toggleFavourite,
    openModal,
    closeModal,
    photoData,
    topicData,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photoData={photoData}
        topicData={topicData}
        openModal={openModal}
        isFavorited={isFavorited}
        toggleFavourite={toggleFavourite}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          isFavorited={isFavorited}
          toggleFavourite={toggleFavourite}
          onClose={closeModal}
          similarPhotos={selectedPhoto.similar_photos}
        />
      )}
    </div>
  );
};

export default App;
