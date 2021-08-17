import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 0.425rem;
  width: 350px;
  box-shadow: 0 4px 24px 0 ${(props) => props.theme.boxShadow};
  margin: 1.2rem;
  display: inline-block;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  transition: all 0.25s ease;
`;
export const CardTitle = styled.h4`
  margin: 0;
  margin-bottom: 1.53rem;
  line-height: 1.2rem;
  word-wrap: break-word;
  font-size: 1.2rem;
  color: ${(props) => props.theme.dark};
  font-family: 'Roboto', sans-serif;
`;
export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem;
  flex-direction: column;
`;
export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: calc(0.428rem - 1px);
  border-top-right-radius: calc(0.428rem - 1px);
`;

export const CardText = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: justify;
  font-size: 14px;
  line-height: 1.45;
  color: ${(props) => props.theme.darkgrey};
  word-wrap: break-word;
`;
