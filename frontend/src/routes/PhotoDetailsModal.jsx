import React from 'react';


import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photo, onClose, toggleFavourite, isFavorited } = props;
  const similarPhotos = photo.similar_photos;
  console.log('photoDetails', props.isFavorited)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <div>
          <PhotoFavButton
            toggleFavourite={toggleFavourite}
            photoId={photo.id}
            isFavorited={isFavorited}
          />
        </div>
        <img
          src={photo.urls.full}
          className="photo-details-modal__image"
          alt="SelectedPhoto"
        />
        <div className="photo-details-modal__top-bar" />
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt="user profile"
            className="photo-list__user-profile"
          />
          <section className="photo-list__user-info">
            <div className="photo-list__user-info">{photo.user.name}</div>
            <div className="photo-list__user-info photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </section>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList photos={similarPhotos} toggleFavourite={toggleFavourite} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
