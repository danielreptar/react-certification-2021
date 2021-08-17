import styled from 'styled-components';
import { deviceMF } from '../breakPoints';

export const ListContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 0.8rem;

  @media ${deviceMF.mobileL} {
    padding: 0;
  }
  @media ${deviceMF.tablet} {
    width: 450px;
    height: 100%;
  }
`;
export const List = styled.ul`
  margin-right: 12px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const ListItemInfo = styled.div`
  display: flex;
`;
export const ListImage = styled.img`
  width: 120px;
  border-radius: 8px;
`;
export const ListItemTitle = styled.h4`
  margin: 0.4rem 0;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: normal;
  margin-left: 0.5rem;
  word-wrap: break-word;
  line-height: 1rem;
`;
export const ListItemSeparator = styled.hr`
  border: 2px solid ${(props) => props.theme.grey};
  border-radius: 1px;
  width: 100%;
  opacity: 0.7;
`;
