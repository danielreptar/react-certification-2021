import React from 'react';

// icons
import { Sun, Moon, User } from 'react-feather';

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
  const { theme: actualTheme, changeThemeCall } = useGlobalContext();

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
        />
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
            <DropdownItem>Login</DropdownItem>
          </Dropdown>
        </DropdownWrapper>
      </OptionsContainer>
    </MenuContainer>
  );
};

export default HorizontalMenu;
