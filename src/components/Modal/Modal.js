import propTypes from 'prop-types';
import { ModalContainer, ModalOverlay } from './Modal.styled';

export const Modal = ({ src, alt, handleClose }) => (
  <ModalOverlay onClick={handleClose}>
    <ModalContainer>
      <img src={src} alt={alt} />
    </ModalContainer>
  </ModalOverlay>
);

Modal.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired,
};
