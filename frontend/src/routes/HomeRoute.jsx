import React from 'react';
import { useState, useEffect } from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useApplicationData from '../hooks/useApplicationData';

const HomeRoute = (props) => {
  const { photoData, topicData, fetchPhotosByTopic } = useApplicationData();
  const defaultState = [];
  const [isFavorited, setIsFavourited] = useState(defaultState);
  const toggleFavourite = (photo) => {
    if (isFavorited.includes(photo)) {
      let newFavourites = [...isFavorited].filter((favouritePhoto) => photo !== favouritePhoto)
      setIsFavourited(newFavourites);

    } else {
      setIsFavourited((prev) =>
        [...prev, photo]);

    }
  };

  const handleTopicClick = (topicId) => {
    // Fetch photos for the clicked topic
    fetchPhotosByTopic(topicId)
      .then((photos) => {
        // Handle the fetched photos, e.g., update your component state
        console.log("Fetched photos by topic:", photos);
      })
      .catch((error) => {
        // Handle any errors from the fetchPhotosByTopic function
        console.error("Error handling topic click:", error);
      });
  };
  return (
    <div className="home-route">
      <TopNavigation isFavorited={isFavorited} />
      <PhotoList
        photos={photoData}
        topics={topicData}
        openModal={props.openModal}
        isFavorited={isFavorited}

        toggleFavourite={toggleFavourite} />

    </div>
  );
};

export default HomeRoute;
