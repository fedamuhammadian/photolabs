import React from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


// functional component for the HomeRoute
const HomeRoute = (props) => {
  const { isFavorited, fetchPhotosByTopic } = props;

  return (
    <div className="home-route">
      <TopNavigation isFavorited={isFavorited} onTopicClick={fetchPhotosByTopic} />
      <PhotoList
        photos={props.photoData}
        topics={props.topicData}
        openModal={props.openModal}
        isFavorited={isFavorited}
        toggleFavourite={props.toggleFavourite}
      />
    </div>
  );
};


export default HomeRoute;
