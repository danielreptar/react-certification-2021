import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.2rem;
  @media ${deviceMF.tablet} {
    margin: 0 1.8rem 0 0;
  }
`;
export const VideoInfoContainer = styled.div`
  padding: 0.8rem;
  @media ${deviceMF.mobileL} {
    padding: 1.2rem 0;
  }
`;
export const VideoTitle = styled.h2`
  margin-bottom: 1.4rem;
  font-size: 18px;
  @media ${deviceMF.mobileL} {
    font-size: 24px;
    padding: 0;
  }
`;
export const VideoText = styled.p`
  font-family: 'Roboto';
  text-align: justify;
  font-size: 14px;

  @media ${deviceMF.mobileL} {
    font-size: 16px;
  }
`;
