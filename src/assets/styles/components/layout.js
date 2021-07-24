import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const LayoutWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0;
  padding-top: 5.5rem;

  @media ${deviceMF.mobileL} {
    padding: 2.6rem;
    padding-top: 6.35rem;
    padding-left: 6.35rem;
  }
`;
