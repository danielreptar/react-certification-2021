import React from 'react';

// icons
import { Sun, Moon, User, Search } from 'react-feather';

import {
  ButtonDropdown,
  Dropdown,
  DropdownItem,
  DropdownWrapper,
  MenuContainer,
  OptionsContainer,
} from '../../assets/styles/components/horizontalMenu';
import { theme } from '../../assets/styles/theme';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';
import Input from '../Input/Input';

const HorizontalMenu = ({ handleSearch, handleKeyPress, search }) => {
  const {
    theme: actualTheme,
    changeThemeCall,
    toggleModalCall,
    logoutCall,
    login,
  } = useGlobalContext();

  const handleTheme = () => {
    if (actualTheme.theme === 'light') {
      changeThemeCall(theme.darkTheme);
    } else {
      changeThemeCall(theme.lightTheme);
    }
  };

  return (
    <MenuContainer>
      <div>
        <Input
          handleKeyPress={handleKeyPress}
          handleSearch={handleSearch}
          search={search}
          type="text"
          placeholder="Search..."
        >
          <Search width={16} />
        </Input>
      </div>
      <OptionsContainer>
        {/*  eslint-disable-next-line  */}
        <div role="button" onClick={handleTheme}>
          {actualTheme.theme === 'light' ? <Sun /> : <Moon />}
        </div>
        <DropdownWrapper>
          <ButtonDropdown>
            <User />
          </ButtonDropdown>
          <Dropdown>
            {!login.user ? (
              <DropdownItem onClick={toggleModalCall}>Login</DropdownItem>
            ) : (
              <DropdownItem onClick={logoutCall}>Logout</DropdownItem>
            )}
          </Dropdown>
        </DropdownWrapper>
      </OptionsContainer>
    </MenuContainer>
  );
};

export default HorizontalMenu;
