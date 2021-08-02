import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const VideoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media ${deviceMF.tablet} {
    height: calc(100vh - 143.2px);
    flex-direction: row;
  }
`;
