import React from 'react';

import { useState } from 'react';

//import PhotoListItem from './components/PhotoListItem';
//import PhotoList from 'components/PhotoList';


import mockphotos from './mocks/photos';
import mocktopics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };



const App = () => {
  const [isFavorited, setIsFavourited] = useState([]);
  //use useState to store the the photos and topics
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
      <h1> Hello from react </h1>
      {/*<PhotoList data={sampleDataForPhotoListItem} /> */}
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
