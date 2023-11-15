import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const { id, location, user } = props.data;
  const { regular, profile } = props.data.urls;

  return (
    <div className="photo-list-item">
      <img src={regular} alt={`Photo by ${user.username}`} className="photo-list__image" />
      <h3>{`Photo ${id}`}</h3>
      <div className="photo-list__user-details ">
        <img src={user.profile} className="photo-list__user-profile" />
        <div>
          <p className="photo-list__user-info">{user.name}</p>
          <p className="photo-list__user-location">
            {location.city}, {location.country}
          </p>
        </div>
        </div>
    </div>
  );
};

export default PhotoListItem;
