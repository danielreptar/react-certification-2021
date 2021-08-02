import React from 'react';
import { LayoutWrapper } from '../../assets/styles/components/layout';

import HorizontalMenu from '../HorizontalMenu';
import Sidebar from '../Sidebar';

import './Layout.styles.css';

function Layout({ children, ...props }) {
  return (
    <>
      <HorizontalMenu {...props} />
      <Sidebar />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
}

export default Layout;
