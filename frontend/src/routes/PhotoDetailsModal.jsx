import React from 'react';


import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ photo, onClose, toggleFavourite }) => {

  const similarPhotos = Object.values(photo.similar_photos);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div>
        <PhotoFavButton
          photo={photo}
          toggleFavourite={toggleFavourite} />
      </div>
      <div className="photo-details-modal__image" />
      <img src={photo.urls.full} className="photo-details-modal__image" alt="SelectedPhoto" />
      <div className="photo-details-modal__top-bar" />
      <div className="photo-details-modal__photographer-details">
        <img src={photo.user.profile} className="photo-list__user-profile" alt="ProfilePhoto" />
        <div className="photo-list__user-info">
          <p className="photo-list__user-info">{photo.user.name}</p>
          <p className="photo-list__user-info photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
      <h2 className="similar-photos"></h2>
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList photos={similarPhotos} />
    </div>

  )
};

export default PhotoDetailsModal;
