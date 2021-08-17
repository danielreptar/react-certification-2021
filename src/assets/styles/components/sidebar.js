import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const SidebarContainer = styled.ul`
  position: fixed;
  top: 64px;
  left: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 60px;
  list-style-type: none;
  background: ${(props) => props.theme.lightPink};
  overflow: hidden;
  transition: width 0.5s;
  box-shadow: 0 4px 24px 0 ${(props) => props.theme.boxShadow};
  display: none;
  transition: all 0.25s ease;

  &:hover {
    width: 300px;
  }

  @media ${deviceMF.mobileL} {
    display: inline;
  }
`;

export const SidebarItem = styled.li`
  width: 300px;
`;
export const SidebarLink = styled.div`
  display: flex;
  font-size: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.black};
  height: 60px;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.darkPink};
  }
`;
export const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
`;
