import styled from 'styled-components';

export const ButtonStyled = styled.button`
  min-width: 120px;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;

  color: ${(props) => props.theme.black};
  box-shadow: 0 4px 24px 0 ${(props) => props.theme.boxShadow};
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-left: ${(props) => (props.mLeft ? '.6rem' : '0')};
  transition: all 0.25s ease;
  &:active {
    transform: scale(0.95);
  }
`;
export const ButtonPrimary = styled(ButtonStyled)`
  background-color: ${(props) => props.theme.lightPink};
`;
export const ButtonSuccess = styled(ButtonStyled)`
  background-color: ${(props) => props.theme.success};
`;
export const ButtonCancel = styled(ButtonStyled)`
  background-color: ${(props) => props.theme.cancel};
`;
