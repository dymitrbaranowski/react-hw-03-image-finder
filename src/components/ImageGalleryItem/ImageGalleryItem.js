import propTypes from 'prop-types';
import { GalleryItem,Image  } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onclick }) => (
  <GalleryItem id={image.id} onClick={onclick}>
    <Image
      src={image.webformatURL}
      alt={image.tags}
      name={image.largeImageURL}
    />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};
