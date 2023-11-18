import React from "react";

//import topics from '../mocks/topics';
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


import  { useEffect, useState } from 'react';

const TopicList = ({ onTopicClick }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentTopicId, setCurrentTopicId] = useState(null);

  useEffect(() => {
   
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => {
        setTopics(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="top-nav-bar__topic-list">
      {isLoading ? (
        <p>Loading topics...</p>
      ) : (
        topics.map((topic) => (
            <TopicListItem key={topic.id} topic={topic} onTopicClick={onTopicClick}
            />
        ))
      )}
    </div>
  );
};

export default TopicList;
