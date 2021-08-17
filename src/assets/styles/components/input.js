import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const InputContainer = styled.div`
  background: ${(props) => props.theme.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 12px;
  position: relative;
  width: 240px;
  transition: all 0.25s ease;
  @media ${deviceMF.mobileL} {
    width: 280px;
  }
`;
export const InputStyled = styled.input`
  border: 0px;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
  font-family: 'Cocogoose Pro Light', sans-serif;
  margin-left: 8px;
  color: ${(props) => props.theme.black};
  width: 200px;
  transition: all 0.25s ease;
  &:focus {
    padding-left: 5px;
    padding-right: 0px;
  }
  @media ${deviceMF.mobileL} {
    width: 240px;
  }
`;
export const Icon = styled.div`
  order: -1;
  background: ${(props) => props.theme.white};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 31px;
  z-index: 2;
  transition: all 0.25s ease;

  ${InputStyled}:focus ~ & {
    transform: translate(0, -8px);
    box-shadow: 0px 8px 20px 0px ${(props) => props.theme.boxShadow};
  }
`;
export const Background = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0;
  pointer-events: none;
  border-radius: inherit;
  box-sizing: border-box;
  border: 2px solid transparent;
  transition: all 0.25s ease;

  ${InputStyled}:focus ~ & {
    border: 2px solid ${(props) => props.theme.black};
  }
`;
