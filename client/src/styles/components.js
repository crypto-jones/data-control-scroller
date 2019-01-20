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
  background-color: green;
  min-width: 75px;
  margin: 5px;
  height: 75px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin: 5px;
  min-height: 100px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
