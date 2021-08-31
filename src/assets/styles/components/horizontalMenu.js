import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const MenuContainer = styled.header`
  width: 100%;
  padding: 0.6rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 4px 24px 0 ${(props) => props.theme.boxShadow};
  position: fixed;
  transition: all 0.25s ease;
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
  position: relative;
`;

export const ButtonDropdown = styled.button`
  background: ${(props) => props.theme.grey};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.black};
  width: 45px;
  height: 45px;
  cursor: pointer;
  margin-left: 1.4rem;
  position: relative;
  transition: all 0.25s ease;
`;
export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: -80px;
  background: ${(props) => props.theme.white};
  width: 150px;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px ${(props) => props.theme.boxShadow};
  text-align: left;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;

  &:before {
    content: '';
    position: absolute;
    top: -6px;
    right: 20px;
    width: 0;
    height: 0;
    box-shadow: 2px -2px 6px ${(props) => props.theme.boxShadow};
    border-top: 6px solid ${(props) => props.theme.white};
    border-right: 6px solid ${(props) => props.theme.white};
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
  background: ${(props) => props.theme.white};
  font-size: 1rem;
  padding: 0.3rem 0;
  color: ${(props) => props.theme.black};
  &:hover {
    background: ${(props) => props.theme.grey};
  }
`;
