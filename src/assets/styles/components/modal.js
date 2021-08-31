import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.blur};
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  top: 14rem;
  background-color: ${(props) => props.theme.white};
  padding: 1.2rem;
  border-radius: 0.425rem;
  width: 280px;
  box-shadow: 0 4px 24px 0 ${(props) => props.theme.boxShadow};
  overflow: hidden;
  background-color: ${(props) => props.theme.white};
  @media ${deviceMF.mobileL} {
    width: 380px;
  }
`;
export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  padding: 0.5rem 1rem;
  border-top-right-radius: 0.425rem;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  outline: none;
  &:hover {
    color: ${(props) => props.theme.lightPink};
  }
`;
