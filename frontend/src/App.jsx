import React from 'react';

import { useState } from 'react';



import mockphotos from './mocks/photos';
import mocktopics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';




const App = () => {
  const [isFavorited, setIsFavourited] = useState([]);
  const [photos, setPhotoData] = useState(mockphotos);
  const [topicData, setTopicData] = useState(mocktopics);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photo) => {
    if (isFavorited.includes(photo)) {
      let newFavourites = [...isFavorited].filter((favouritePhoto) => photo !== favouritePhoto);
      setIsFavourited(newFavourites);
    } else {
      setIsFavourited((prev) => [...prev, photo]);
    }
  };
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };
  return (
    <div className="App">
      <HomeRoute photos={photos} openModal={openModal} isFavorited={isFavorited} toggleFavourite={toggleFavourite} />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          toggleFavourite={toggleFavourite}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedPhoto(null);
          }}
        />
      )}
    </div>
  );
};

export default App;
