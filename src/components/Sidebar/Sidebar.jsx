import React from 'react';
import { Home, Star } from 'react-feather';
import {
  SidebarLink,
  SidebarIcon,
  SidebarContainer,
  SidebarItem,
} from '../../assets/styles/components/sidebar';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

const Sidebar = () => {
  const { login } = useGlobalContext();
  return (
    <>
      <SidebarContainer>
        <SidebarItem>
          <SidebarLink to="/">
            <SidebarIcon>
              <Home width={20} />
            </SidebarIcon>
            Home
          </SidebarLink>
        </SidebarItem>
        {login.user && (
          <SidebarItem>
            <SidebarLink to="/favorites">
              <SidebarIcon>
                <Star width={20} />
              </SidebarIcon>
              Favorites
            </SidebarLink>
          </SidebarItem>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
