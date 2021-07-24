import React from 'react';
import { Home } from 'react-feather';
import {
  SidebarLink,
  SidebarIcon,
  SidebarContainer,
  SidebarItem,
} from '../../assets/styles/components/sidebar';

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarItem>
          <SidebarLink>
            <SidebarIcon>
              <Home width={20} />
            </SidebarIcon>
            Home
          </SidebarLink>
        </SidebarItem>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
