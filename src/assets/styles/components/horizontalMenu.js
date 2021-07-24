import styled from 'styled-components';
import { deviceMF } from '../breakPoints';
import { black, grey, white } from '../colors';

export const MenuContainer = styled.header`
  width: 100%;
  padding: 0.6rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${white};
  box-shadow: 0 4px 24px 0 rgb(34, 41, 47, 10%);
  position: fixed;
  @media ${deviceMF.mobileL} {
    padding: 0.6rem 1.6rem;
    justify-content: space-between;
  }
`;
export const OptionsContainer = styled.div`
  display: none;
  @media ${deviceMF.mobileL} {
    display: flex;
    align-items: center;
  }
`;
export const DropdownWrapper = styled.div`
  /* display: inline; */
  position: relative;
`;

export const ButtonDropdown = styled.button`
  background: ${grey};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  cursor: pointer;
  margin-left: 1.4rem;
  position: relative;
  /* overflow: hidden; */
`;
export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: -80px;
  background: ${white};
  width: 150px;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: -6px;
    right: 20px;
    width: 0;
    height: 0;
    box-shadow: 2px -2px 6px rgba(0, 0, 0, 0.05);
    border-top: 6px solid ${white};
    border-right: 6px solid ${white};
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
    transform: rotate(-45deg);
    mix-blend-mode: multiply;
  }

  ${ButtonDropdown}:active ~  & {
    transform: translate(0, 10px);
    opacity: 1;
    visibility: visible;
  }
  ${ButtonDropdown}:focus ~ & {
    transform: translate(0, 10px);
    opacity: 1;
    visibility: visible;
  }
`;
export const DropdownItem = styled.li`
  z-index: 1;
  position: relative;
  background: ${white};
  font-size: 1rem;
  padding: 0.5rem;
  color: ${black};
  &:hover {
    background: ${grey};
  }
`;
