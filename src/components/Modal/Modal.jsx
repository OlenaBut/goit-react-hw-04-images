import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {ModalOverlay, ModalImg } from 'components/Modal/Modal.styled'


const modalRoot = document.querySelector('#modal-root');
export  function Modal({ closeModal, alt, modalImg }) {
  useEffect(() => {
    const closeByEscape = e => e.code === 'Escape' && closeModal();
    window.addEventListener('keydown', closeByEscape);
    return () => {
      window.removeEventListener('keydown', closeByEscape);
    };
  }, [closeModal]);

  return createPortal(
    <ModalOverlay onClick={closeModal}>
      <ModalImg>
        <img src={modalImg} alt={alt} />
      </ModalImg>
    </ModalOverlay>,
    modalRoot
  );
}