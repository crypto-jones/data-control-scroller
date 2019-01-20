import styled from 'styled-components';

// **** ITEMS ****
export const ItemsBoxContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

export const ItemsBoxWrapper = styled.div`
  min-width: 100%;
  min-height: 150px;
  background-color: gray;
  overflow-x: auto;
  display: flex;
  align-items: center;
`;

export const ItemBox = styled.div`
  background: ${props => props.bgColor};
  min-width: 75px;
  margin: 5px;
  height: 75px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

// **** DETAILS ****
export const DetailsBoxContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 500px;
  overflow-y: auto;
`;

export const DetailBox = styled.div`
  background-color: gray;
  min-height: 100px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
