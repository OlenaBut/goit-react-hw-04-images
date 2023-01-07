import PropTypes from 'prop-types';
import { useState } from 'react';
import  { Item, Image } from 'components/ImageGalleryItem/ImageGalleryItem.styled'
import { Modal } from 'components/Modal/Modal.jsx';


export  function ImageGalleryItem({ webformatURL, alt, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <Item>
      <Image src={webformatURL} alt="" onClick={toggleModal} />
      {showModal && (
        <Modal alt={alt} modalImg={largeImageURL} closeModal={toggleModal} />
      )}
    </Item>
  );
}

ImageGalleryItem.prototype = {
  alt: PropTypes.string,
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,

};