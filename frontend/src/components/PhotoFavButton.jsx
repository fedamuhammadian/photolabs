import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, toggleFavourite, isFavorited }) {
  const colorCheck = isFavorited && isFavorited.includes(photoId);

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={colorCheck} displayAlert={false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;