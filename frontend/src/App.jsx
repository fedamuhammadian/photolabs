import React from 'react';

import { useState } from 'react';



import mockphotos from './mocks/photos';
import mocktopics from './mocks/topics';
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
    photos,
  } = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute photos={photos} openModal={openModal} isFavorited={isFavorited} toggleFavourite={toggleFavourite} />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          toggleFavourite={toggleFavourite}
          onClose={() => {
          closeModal();
           }}
        />
      )}
    </div>
  );
};

export default App;
