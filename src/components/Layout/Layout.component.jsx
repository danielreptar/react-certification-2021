import React from 'react';

import { LayoutWrapper } from '../../assets/styles/components/layout';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

import HorizontalMenu from '../HorizontalMenu';
import LoginForm from '../LoginForm/LoginForm';

import Modal from '../Modal/Modal';
import Sidebar from '../Sidebar';

import './Layout.styles.css';

function Layout({ children, ...props }) {
  const { modal, toggleModalCall } = useGlobalContext();
  return (
    <>
      <HorizontalMenu {...props} />
      <Sidebar />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Modal isOpen={modal.isOpen} onClose={toggleModalCall}>
        <LoginForm />
      </Modal>
    </>
  );
}

export default Layout;
