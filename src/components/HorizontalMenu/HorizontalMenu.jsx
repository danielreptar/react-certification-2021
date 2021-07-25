import React from 'react';

// icons
import { Sun, User } from 'react-feather';

import {
  ButtonDropdown,
  Dropdown,
  DropdownItem,
  DropdownWrapper,
  MenuContainer,
  OptionsContainer,
} from '../../assets/styles/components/horizontalMenu';
import Input from '../Input/Input';

const HorizontalMenu = () => {
  return (
    <MenuContainer>
      <div>
        <Input type="text" placeholder={'Search...'} />
      </div>
      <OptionsContainer>
        <Sun />

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
