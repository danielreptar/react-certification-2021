import React from 'react';
import ReactDOM from 'react-dom';
import {
  Background,
  ModalCloseButton,
  ModalContainer,
} from '../../assets/styles/components/modal';
import { XCircle } from 'react-feather';

const Modal = ({ isOpen = true, onClose = () => {}, children }) => {
  if (!isOpen) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <Background>
        <ModalContainer data-testid="modal-element">
          <ModalCloseButton onClick={onClose}>
            <XCircle />
          </ModalCloseButton>

          {children}
        </ModalContainer>
      </Background>,
      document.getElementById('modal')
    );
  }
};

export default Modal;
