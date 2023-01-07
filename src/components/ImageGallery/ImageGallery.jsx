import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from 'components/ImageGalleryItem/ImageGalleryItem.styled';


export const ImageGallery = ({ items }) => {
  return (
    <Gallery>
      {items.map(({ id, tags, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            alt={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          ></ImageGalleryItem>
        );
      })}
    </Gallery>
  );
};
ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};