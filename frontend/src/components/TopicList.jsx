import React from "react";


import TopicListItem from "./TopicListItem";
import useApplicationData from "hooks/useApplicationData";
import "../styles/TopicList.scss";


import  { useEffect } from 'react';

const TopicList = ({ onTopicClick }) => {
  const { topicData, fetchTopics, isLoading } = useApplicationData();

  useEffect(() => {
    // Fetch topics when the component mounts
    fetchTopics();
  }, [fetchTopics]);

  return (
    <div className="top-nav-bar__topic-list">
      {isLoading ? (
        <p>Loading topics...</p>
      ) : (
        topicData.map((topic) => (
            <TopicListItem key={topic.id} topic={topic} onTopicClick={onTopicClick}
            />
        ))
      )}
    </div>
  );
};

export default TopicList;
