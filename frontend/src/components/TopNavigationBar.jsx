import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { isFavorited, selectedTopicId, onTopicClick } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList onTopicClick={onTopicClick} selectedTopicId={selectedTopicId} />
      <div className="top-nav-bar__icon-container">
        <FavBadge isFavorited={isFavorited} />
      </div>
    </div>
  )
}

export default TopNavigation;